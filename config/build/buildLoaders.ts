import path from "node:path";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({ paths }: BuildOptions): webpack.RuleSetRule[] {
  const typescriptLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: {
      loader: "ts-loader",
      options: {
        configFile: paths.tsconfig,
      },
    },
    exclude: /node_modules/,
  };
  return [typescriptLoader];
}
