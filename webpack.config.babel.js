import { resolve } from "path";

export default (env, argv) => {
  return {
    context: resolve("src"),
    entry: "./index.js",
    output: {
      path: resolve("dist"),
      filename: "bundle.js",
      publicPath: "/dist/",
      pathinfo: argv.mode === "development"
    },
    devtool: argv.mode === "production" ? "source-map" : "eval",
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ["babel-loader"],
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    }
  };
};
