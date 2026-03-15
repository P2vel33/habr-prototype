import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { paths, isDev } = options;

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const svgrLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

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
      // "style-loader",
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };
  return [typescriptLoader, styleLoader, svgrLoader, fileLoader];
}
