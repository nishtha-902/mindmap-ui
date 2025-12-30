import { useState } from "react";
import MindMap from "./components/MindMap";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import initialData from "./data/mindmapData.json";
import "./styles/app.css";

export default function App() {
  const [data, setData] = useState(initialData);
  const [selectedNode, setSelectedNode] = useState(null);
  const [actions, setActions] = useState({});

  const updateNode = (id, updates) => {
    setData(prev => ({
      ...prev,
      nodes: prev.nodes.map(n =>
        n.id === id ? { ...n, ...updates } : n
      )
    }));
  };

  return (
    <div className="app dark">
      <Toolbar actions={actions} setData={setData} data={data} />
      <div className="layout">
        <MindMap
          data={data}
          onSelect={setSelectedNode}
          registerActions={setActions}
        />
        <Sidebar
          node={selectedNode}
          onUpdate={updateNode}
        />
      </div>
    </div>
  );
}
