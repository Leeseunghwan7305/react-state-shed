const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./stan/src",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: {
      name: "shed",
      type: "umd",
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  devtool: "source-map",
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};
