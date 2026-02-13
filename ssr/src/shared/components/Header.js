import React from "react";

function Header() {
  return (
    <header style={{
      textAlign: "center",
      padding: "48px 24px 40px",
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      color: "#fff",
      borderRadius: 14,
      marginBottom: 24
    }}>
      <h1 style={{ fontSize: "2.6rem", marginBottom: 8 }}>
        SSR React App
      </h1>
      <p style={{ fontSize: "1.05rem", opacity: 0.75, marginBottom: 20 }}>
        Server-Side Rendered with Express and React 18
      </p>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 10 }}>
        <span style={{
          padding: "4px 14px", borderRadius: 20, fontSize: "0.8rem",
          fontWeight: 600, color: "#1a1a2e", background: "#61dafb"
        }}>React 18</span>
        <span style={{
          padding: "4px 14px", borderRadius: 20, fontSize: "0.8rem",
          fontWeight: 600, color: "#1a1a2e", background: "#68a063"
        }}>Node.js</span>
        <span style={{
          padding: "4px 14px", borderRadius: 20, fontSize: "0.8rem",
          fontWeight: 600, color: "#1a1a2e", background: "#f5c518"
        }}>Webpack 5</span>
        <span style={{
          padding: "4px 14px", borderRadius: 20, fontSize: "0.8rem",
          fontWeight: 600, color: "#fff", background: "#8b5cf6"
        }}>SSR</span>
      </div>
    </header>
  );
}

export default Header;