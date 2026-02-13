import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "../shared/App.js";

console.log("CLIENT JS EXECUTED");

const container = document.getElementById("root");

hydrateRoot(
  container,
  <App initialData={window.__INITIAL_DATA__ || []} />
);
