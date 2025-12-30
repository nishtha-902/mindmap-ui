import { useEffect, useRef } from "react";
import cytoscape from "cytoscape";
import dagre from "cytoscape-dagre";

cytoscape.use(dagre);

export default function MindMap({ data, onSelect, registerActions }) {
  const cyRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    // Create tooltip element
    const tooltip = document.createElement("div");
    tooltip.className = "node-tooltip";
    document.body.appendChild(tooltip);
    tooltipRef.current = tooltip;

    const elements = [];

    data.nodes.forEach(node => {
      elements.push({
        data: {
          id: node.id,
          label: node.label,
          summary: node.summary,
          details: node.details
        }
      });

      if (node.parent) {
        elements.push({
          data: {
            source: node.parent,
            target: node.id
          }
        });
      }
    });

    cyRef.current = cytoscape({
      container: document.getElementById("cy"),
      elements,
      layout: {
        name: "dagre",
        spacingFactor: 1.8
      },
      style: [
        {
          selector: "node",
          style: {
            "background-color": "#9fd3ff",
            label: "data(label)",
            "text-valign": "center",
            "text-halign": "center",
            "text-wrap": "wrap",
            "text-max-width": 90,
            "font-size": 14,
            "font-weight": "600",
            color: "#1e293b",
            width: 120,
            height: 120
          }
        },
        {
          selector: "node:selected",
          style: {
            "border-width": 4,
            "border-color": "#fff200"
          }
        },
        {
          selector: "node#root",
          style: {
            "background-color": "#7db9ff",
            width: 160,
            height: 160,
            "font-size": 18,
            "font-weight": "700",
            "text-max-width": 120
          }
        },
        {
          selector: "edge",
          style: {
            width: 2,
            "line-color": "#94a3b8"
          }
        }
      ]
    });

    // CLICK → select + expand/collapse
    cyRef.current.on("tap", "node", evt => {
      const node = evt.target;
      onSelect(node.data());

      node.outgoers("node").forEach(child => {
        child.style(
          "display",
          child.style("display") === "none" ? "element" : "none"
        );
      });
    });

    // 🔹 HOVER → show tooltip
    cyRef.current.on("mouseover", "node", evt => {
      const summary = evt.target.data("summary");
      if (!summary) return;

      tooltip.innerText = summary;
      tooltip.style.display = "block";
    });

    cyRef.current.on("mousemove", "node", evt => {
      tooltip.style.left = evt.originalEvent.pageX + 12 + "px";
      tooltip.style.top = evt.originalEvent.pageY + 12 + "px";
    });

    cyRef.current.on("mouseout", "node", () => {
      tooltip.style.display = "none";
    });

    // Toolbar actions (unchanged)
    registerActions({
      expandAll: () => {
        cyRef.current.nodes().style("display", "element");
        cyRef.current.layout({ name: "dagre" }).run();
      },
      collapseAll: () => {
        cyRef.current.nodes("[id != 'root']").style("display", "none");
      },
      fitView: () => {
        cyRef.current.fit();
      },
      addNode: setData => {
        const id = `node-${Date.now()}`;
        setData(prev => ({
          ...prev,
          nodes: [
            ...prev.nodes,
            {
              id,
              label: "New Node",
              summary: "Short summary here",
              details: "",
              parent: "root"
            }
          ]
        }));
      }
    });

    return () => {
      cyRef.current.destroy();
      document.body.removeChild(tooltip);
    };
  }, [data]);

  return <div id="cy" className="mindmap"></div>;
}
