import express from "express";
import path from "path";
import { renderPage } from "./renderer.js";
import { getData } from "./data.js";

const app = express();
const PORT = 3000;

/*
  Serve static files from real project folder
*/
app.use(
  express.static(path.resolve(process.cwd(), "build/public"))
);

/*
  API
*/
app.get("/api/data", (req, res) => {
  const data = getData();
  res.json({ success: true, count: data.length, data });
});

/*
  SSR
*/
app.get("*", (req, res) => {
  try {
    const data = getData();
    const html = renderPage(data);
    res.send(html);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`SSR running at http://localhost:${PORT}`);
});
