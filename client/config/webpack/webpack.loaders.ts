import { type RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { BuildOptions } from "./webpack.types";

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const {isDev} = options;

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            namedExport: false,
            auto: (resPath: string) => resPath.includes(".module."),
            localIdentName: isDev ? "[name]_[hash:base64:5]" : "[hash:base64:5]",
          },
        },
      },
      "sass-loader",
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptLoader, cssLoader];
};
