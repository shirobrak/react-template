// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "dist"), //The output directory as an absolute path.
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.(jpg|png|svg|ico)$/,
        use: ["file-loader?name=img/[name].[hash:8].[ext]"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My React App",
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
};

module.exports = config;
