// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { merge } = require("webpack-merge");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const common = require("./webpack.config.js");

const env = process.env;

const publicPath = () => {
  const port = env.APP_PORT ?? "9001";
  return "localhost:" + port;
};

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    public: publicPath(),
    host: "0.0.0.0",
    hot: true,
    port: 9001,
    historyApiFallback: true,
    disableHostCheck: true,
  },
});
