import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import DataList from "./components/DataList.js";
import Footer from "./components/Footer.js";

function App(props) {
  var initialData = props.initialData || [];

  var dataState = useState(initialData);
  var data = dataState[0];
  var setData = dataState[1];

  var loadingState = useState(initialData.length === 0);
  var loading = loadingState[0];
  var setLoading = loadingState[1];

  var counterState = useState(0);
  var counter = counterState[0];
  var setCounter = counterState[1];

  useEffect(function () {
    if (initialData.length === 0) {
      fetch("/api/data")
        .then(function (res) { return res.json(); })
        .then(function (result) {
          setData(result.data);
          setLoading(false);
        })
        .catch(function (err) {
          console.error("Fetch error:", err);
          setLoading(false);
        });
    }
  }, []);

  return (
    <div style={{ maxWidth: 820, margin: "0 auto", padding: "24px 16px", minHeight: "100vh" }}>
      <Header />

      <main style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <section style={{
          background: "#fff",
          borderRadius: 14,
          padding: "28px 32px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)"
        }}>
          <h2 style={{ fontSize: "1.35rem", marginBottom: 8 }}>
            Interactive Counter
          </h2>
          <p style={{ color: "#555", marginBottom: 20 }}>
            Click buttons below. If they work, hydration is successful.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24 }}>
            <button
              onClick={function () { setCounter(function (c) { return c - 1; }); }}
              style={{
                width: 52, height: 52, fontSize: "1.6rem",
                border: "none", borderRadius: "50%", cursor: "pointer",
                fontWeight: 700, color: "#fff", background: "#f44336"
              }}
            >
              -
            </button>
            <span style={{ fontSize: "2.4rem", fontWeight: 700, minWidth: 64, textAlign: "center" }}>
              {counter}
            </span>
            <button
              onClick={function () { setCounter(function (c) { return c + 1; }); }}
              style={{
                width: 52, height: 52, fontSize: "1.6rem",
                border: "none", borderRadius: "50%", cursor: "pointer",
                fontWeight: 700, color: "#fff", background: "#4caf50"
              }}
            >
              +
            </button>
          </div>
        </section>

        <section style={{
          background: "#fff",
          borderRadius: 14,
          padding: "28px 32px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)"
        }}>
          <h2 style={{ fontSize: "1.35rem", marginBottom: 8 }}>
            Data from Express API
          </h2>
          <p style={{ color: "#555", marginBottom: 20 }}>
            Fetched server-side, served at <code>/api/data</code>
          </p>
          <DataList data={data} loading={loading} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;