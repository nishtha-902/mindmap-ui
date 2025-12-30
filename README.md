# 🧠 Interactive Data-Driven Mindmap UI

An interactive, data-driven **Mindmap Visualization UI** built using **React.js** and **Cytoscape.js**.  
This project renders hierarchical knowledge structures from a structured data source (JSON) and provides rich interactions such as expand/collapse, hover summaries, inline editing, and full documentation generation.

The application is designed to emphasize **clean architecture**, **data-driven rendering**, and **UX clarity**, making it suitable for technical evaluations, interviews, and real-world visualization use cases.

---

## ✨ Features

### Mindmap Visualization
- Graph / mindmap structure with nodes and edges
- Clear hierarchical relationships (parent → child)
- Automatically computed layout using Dagre
- Highlight selected nodes

### Interactive Capabilities
- Click nodes to expand / collapse children
- Hover over nodes to see short summaries
- Select nodes to view details in a sidebar
- Fit view / reset zoom
- Add new nodes dynamically
- Edit node label and description from the UI
- Generate full documentation from the mindmap

### Data Display
- **On hover**: Short summary tooltip
- **Sidebar**: Detailed description and editable content
- **Documentation view**: Complete structured text representation

### Responsiveness
- Desktop: Mindmap + sidebar side-by-side
- Tablet: Adaptive widths
- Mobile: Sidebar stacks below the mindmap

---

## 🛠️ Technologies Used

- **React.js**
  - Component-based architecture
  - State-driven UI updates
  - Clean separation of concerns

- **JavaScript (ES6+)**
  - Core logic and interaction handling

- **HTML5**
  - Structural layout

- **CSS3**
  - Responsive layout
  - Dark UI theme
  - Tooltip and sidebar styling

---

## 📚 Libraries Used (and Why)

### Cytoscape.js
- High-performance graph visualization library
- Handles nodes, edges, zoom, pan, selection, and events
- Provides fine-grained control over graph interactions

### cytoscape-dagre
- Layout engine for hierarchical graphs
- Automatically positions parent-child relationships
- Ensures readable and visually balanced layouts

---

## 🧩 Overall Architecture & Approach

The project follows a **data-driven, unidirectional data flow architecture**.

### Design Principles
- **Single Source of Truth**
  - Mindmap data is stored in React state
- **Data-Driven Rendering**
  - The UI is generated entirely from structured data
- **Loose Coupling**
  - Visualization logic is isolated from UI components
- **Extensibility**
  - New features can be added without changing core logic

### High-Level Architecture

Structured Data (JSON)

↓

React State (App.jsx)

↓

Cytoscape Graph Rendering

↓

User Interaction (Hover, Click, Edit)

↓

Sidebar / Documentation View


---

## 🔄 Data Flow: JSON → UI

### 1. Data Source
The entire mindmap is defined using a structured JSON file.

Example:

```json
{
  "nodes": [
    {
      "id": "root",
      "label": "Main Topic",
      "summary": "Short description",
      "details": "Detailed explanation"
    },
    {
      "id": "child1",
      "label": "Sub Topic",
      "summary": "Quick info",
      "parent": "root"
    }
  ]
}
```
### 2. Loading the Data

The JSON file is imported into the React application

Stored in React state using useState

### 3. Visualization Generation

Each JSON node becomes a Cytoscape node

Each parent relationship creates a directed edge

Dagre computes the layout automatically

### 4. Interaction Handling

Hover → Displays summary as a tooltip

Click → Selects node and toggles children visibility

Edit → Updates node data in React state

Add Node → Appends new data to the JSON state

### 5. UI Synchronization

Whenever the data changes:

React state updates

Cytoscape graph re-renders

Sidebar and documentation views update automatically

✅ No UI logic needs to be modified when:

Adding new nodes

Updating text

Changing hierarchy

## 📄 Full Documentation Feature

The “Full Documentation” button:

Opens a new tab

Generates a complete textual documentation view

Includes node labels, summaries, details, and hierarchy

Reflects the latest state of the mindmap

This allows the mindmap to be used as both:

A visual exploration tool

A structured documentation source

## 📱 Responsive Design

Uses flexible layouts and media queries

Ensures usability across desktop, tablet, and mobile devices

Touch-friendly interactions on smaller screens

## 📌 Summary

This project demonstrates:

Clean frontend architecture

Strong data-driven design

Advanced visualization handling

Real-world UI/UX considerations

## Screenshots
The full mindmap view

<img width="1912" height="804" alt="image" src="https://github.com/user-attachments/assets/228ad88d-049a-4a8f-b877-44b7d5d408e2" />

Hover interactions

<img width="1367" height="652" alt="image" src="https://github.com/user-attachments/assets/63504320-aa3b-4d43-9f4c-62f388ebed4d" />

Node selection & summary panel

<img width="1873" height="711" alt="image" src="https://github.com/user-attachments/assets/b2242959-0b31-4871-a291-54fc69b0dde2" />

Expanded and collapsed states

Expanded
<img width="1363" height="828" alt="image" src="https://github.com/user-attachments/assets/32ee38fb-8ecd-487a-b607-4aa7fdb15f8d" />

Collapsed
<img width="1387" height="709" alt="image" src="https://github.com/user-attachments/assets/cd797e86-0a66-45a5-8332-7e13955c280b" />


## Screen Recording Video 
Google drive link with compressed file : https://drive.google.com/file/d/1_N_JHfalDubOmOiZF-58Zde-w4YTPPx2/view?usp=drivesdk
