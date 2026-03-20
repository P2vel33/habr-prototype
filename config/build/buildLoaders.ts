import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { paths, isDev } = options;

    const babelLoader = {
        test: /\.(ts|js|tsx|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "i18next-extract",
                        {
                            locales: ["en", "ru"],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

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
    const styleLoader = buildCssLoader(isDev);
    return [babelLoader, typescriptLoader, styleLoader, svgrLoader, fileLoader];
}
