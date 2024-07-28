import { type Configuration } from "webpack";
import { type BuildOptions } from "./webpack.types";
import { buildPlugins } from "./webpack.plugins";
import { buildLoaders } from "./webpack.loaders";
import { buildResolvers } from "./webpack.resolvers";
import { buildDevServer } from "./webpack.dev-server";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const {mode, paths} = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: "inline-source-map",
    devServer: buildDevServer(options),
  };
}
