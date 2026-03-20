import path from "node:path";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/config";

export default ({
    config,
}: {
    config: webpack.Configuration;
}): webpack.Configuration => {
    const paths: BuildPaths = {
        build: "",
        html: "",
        entry: "",
        tsconfig: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };
    if (config.resolve && !Array.isArray(config.resolve.alias)) {
        config.resolve.alias = {
            ...config.resolve.alias,
            "@": paths.src,
        };
    }
    if (!config.plugins) {
        config.plugins = [];
    }

    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash:8].css",
            chunkFilename: "[name].[contenthash:8].chunk.css",
        })
    );
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push(".ts", ".tsx");
    config.module?.rules?.push(buildCssLoader(true));
    return config;
};
