import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development",

  entry: "./src/client/index.js",

  output: {
    path: path.resolve(__dirname, "build/public"),
    filename: "bundle.js",
    publicPath: "/"
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
