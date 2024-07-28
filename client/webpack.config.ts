import { type BuildOptions, type BuildPaths } from "./config/webpack/webpack.types";
import { buildWebpackConfig } from "./config/webpack/webpack.builder";
import { type Configuration } from "webpack";
import path from "path";

export default (env: BuildOptions) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  }

  const mode = env.mode || "development";
  const port = env.port || 3000;

  const isDev = mode === "development";

  const config: Configuration = buildWebpackConfig({
      mode,
      paths,
      isDev,
      port
    }
  )

  return config;
}



