import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../shared/App.js";

export function renderPage(data) {
  const appHtml = ReactDOMServer.renderToString(
    <App initialData={data} />
  );

  const serializedData = JSON.stringify(data).replace(/</g, "\\u003c");

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>SSR React App</title>
      </head>
      <body>
        <div id="root">${appHtml}</div>

        <script>
          window.__INITIAL_DATA__ = ${serializedData};
        </script>

        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
}
