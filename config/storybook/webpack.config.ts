import path from "node:path";
import webpack, { RuleSetRule } from "webpack";
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
    if (config.module?.rules) {
        config.module.rules = config.module.rules
            .filter(
                (rule): rule is RuleSetRule =>
                    Boolean(rule) && typeof rule === "object"
            )
            .map((rule: RuleSetRule) => {
                if (rule.test && /svg/.test(String(rule.test))) {
                    return { ...rule, exclude: /\.svg$/i };
                }
                return rule;
            });
    }

    if (config.module) {
        if (!config.module.rules) {
            config.module.rules = [];
        }
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        config.module.rules.push(buildCssLoader(true));
    }

    return config;
};
