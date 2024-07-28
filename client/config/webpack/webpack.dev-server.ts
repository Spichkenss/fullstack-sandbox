import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { BuildOptions } from "./webpack.types";

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
  const { port } = options;

  return {
    open: true,
    historyApiFallback: true,
    port,
  };
};
