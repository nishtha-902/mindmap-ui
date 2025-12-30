export default function Toolbar({ actions, setData, data }) {
  const openDocumentation = () => {
    const docWindow = window.open("", "_blank");

    const content = `
      <html>
        <head>
          <title>Mindmap Documentation</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
              background: #0f172a;
              color: white;
            }
            h1 { color: #38bdf8; }
            .node {
              margin-bottom: 20px;
              padding: 12px;
              border: 1px solid #334155;
              border-radius: 8px;
              background: #1e293b;
            }
            .label {
              font-size: 18px;
              font-weight: bold;
            }
            .meta {
              color: #94a3b8;
              font-size: 13px;
            }
          </style>
        </head>
        <body>
          <h1>Architecture Documentation</h1>

          ${data.nodes
            .map(
              n => `
                <div class="node">
                  <div class="label">${n.label}</div>
                  <div class="meta">ID: ${n.id}</div>
                  ${n.parent ? `<div class="meta">Parent: ${n.parent}</div>` : ""}
                  <p><strong>Summary:</strong> ${n.summary || "—"}</p>
                  <p><strong>Details:</strong> ${n.details || "—"}</p>
                </div>
              `
            )
            .join("")}

        </body>
      </html>
    `;

    docWindow.document.write(content);
    docWindow.document.close();
  };

  return (
    <div className="toolbar">
      <button onClick={actions.expandAll}>Expand All</button>
      <button onClick={actions.collapseAll}>Collapse All</button>
      <button onClick={actions.fitView}>Fit View</button>

      <button onClick={() => actions.addNode(setData)}>
        Add Node
      </button>

      <button className="primary" onClick={openDocumentation}>
        Full Documentation
      </button>
    </div>
  );
}
