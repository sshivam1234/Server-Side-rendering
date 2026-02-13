import React from "react";

function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "36px 16px", marginTop: 32, color: "#999" }}>
      <p style={{ marginBottom: 4 }}>SSR React App — Server-Side Rendering Demo</p>
      <p style={{ fontSize: "0.85rem", opacity: 0.7 }}>
        View page source to confirm HTML was rendered on the server.
      </p>
    </footer>
  );
}

export default Footer;