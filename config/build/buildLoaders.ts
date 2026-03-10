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
  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };
  return [typescriptLoader, styleLoader];
}
