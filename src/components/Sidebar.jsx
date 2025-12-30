import '../styles/app.css'
import { useEffect, useState } from "react";

export default function Sidebar({ node, onUpdate }) {
  const [editable, setEditable] = useState(false);
  const [label, setLabel] = useState("");
  const [details, setDetails] = useState("");

  // RESET textarea when node changes
  useEffect(() => {
    if (node) {
      setLabel(node.label || "");
      setDetails(node.details || "");
      setEditable(false);
    }
  }, [node]);

  if (!node) {
    return (
      <aside className="sidebar">
        <h3>Node Details</h3>
        <p>Select a node</p>
      </aside>
    );
  }

  const handleSave = () => {
    onUpdate(node.id, {
      label,
      details
    });
    setEditable(false);
  };

  return (
    <aside className="sidebar">
      <h2>
        {editable ? (
          <input
            value={label}
            onChange={e => setLabel(e.target.value)}
          />
        ) : (
          node.label
        )}
      </h2>

      <p><strong>Summary:</strong> {node.summary}</p>

      <strong>Details:</strong>
      {editable ? (
        <textarea
          value={details}
          onChange={e => setDetails(e.target.value)}
        />
      ) : (
        <p>{node.details}</p>
      )}

      <button onClick={editable ? handleSave : () => setEditable(true)}>
        {editable ? "Save" : "Edit"}
      </button>
    </aside>
  );
}
