import HtmlWebpackPlugin from "html-webpack-plugin"
import { type WebpackPluginInstance, ProgressPlugin } from "webpack"
import type { BuildOptions } from "./webpack.types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = ({paths}: BuildOptions): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ];
}
