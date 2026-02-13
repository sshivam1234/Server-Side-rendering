import React from "react";

function DataList(props) {
  var data = props.data;
  var loading = props.loading;

  if (loading) {
    return <p style={{ textAlign: "center", padding: 32, color: "#888" }}>Loading...</p>;
  }

  if (!data || data.length === 0) {
    return <p style={{ textAlign: "center", padding: 32, color: "#888" }}>No data.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {data.map(function (item) {
        return (
          <li key={item.id} style={{ padding: "18px 0", borderBottom: "1px solid #eee" }}>
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between", flexWrap: "wrap",
              gap: 8, marginBottom: 6
            }}>
              <h3 style={{ fontSize: "1.1rem", color: "#1a1a2e" }}>{item.title}</h3>
              <span style={{
                padding: "2px 12px", background: "#e8f4fd", color: "#0f3460",
                borderRadius: 14, fontSize: "0.78rem", fontWeight: 600
              }}>{item.category}</span>
            </div>
            <p style={{ color: "#666", fontSize: "0.95rem" }}>{item.description}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default DataList;