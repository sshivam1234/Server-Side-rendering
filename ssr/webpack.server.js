import path from "path";
import { fileURLToPath } from "url";
import nodeExternals from "webpack-node-externals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development",

  entry: "./src/server/index.js",

  target: "node",

  externals: [nodeExternals()],

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js",
    libraryTarget: "commonjs2"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx"]
  }
};
