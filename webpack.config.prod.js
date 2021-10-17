var htmlWebpackPlugin = require("html-webpack-plugin"); // we added this
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  mode: "production",
  devtool: "source-map",
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
    vendor: path.resolve(__dirname, "src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css"
    }),

    new htmlWebpackPlugin({
      template: './src/index.html', // path and .html from Step 3
      inject: true,
      trackJSToken: "36389870bc2e401987fb516e0ca7f792"
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
    ],
  },
};
