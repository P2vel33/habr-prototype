module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        "airbnb",
        "plugin:prettier/recommended",
        "plugin:i18next/recommended",
    ],

    plugins: [
        "react",
        "@typescript-eslint",
        // "plugin:react/jsx-runtime",
        "prettier",
        "i18next",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        "react/jsx-indent": [2, 4],
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "react/jsx-filename-extension": [
            1,
            { extensions: [".js", ".jsx", ".tsx"] },
        ],
        indent: [2, 4],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "import/prefer-default-export": "off",
        "no-unused-vars": "warn",
        "react/require-default-props": "off",
        "react/function-component-definition": [
            2,
            { namedComponents: "arrow-function" },
        ],
        "react/jsx-props-no-spreading": "warn",
        "import/no-extraneous-dependencies": "off",
        "no-underscore-dangle": "warn",
        "i18next/no-literal-string": [
            "error",
            { markupOnly: true, ignoreAttribute: ["to"] },
        ],
        "max-len": [
            "error",
            {
                code: 100, // Увеличенный лимит
                ignoreComments: true, // Игнорировать комментарии
                ignorePattern:
                    "^\\s*(?:var\\s.+\\s*=\\s*require\\s*\\(|import\\s+.*from\\s+.*)", // Игнорировать require/import
            },
        ],
        // "no-undef": "warn",
        // ... ваши текущие переопределенные правила ...
        // Здесь можно добавить/переопределить правила при необходимости
    },
    globals: {
        __IS_DEV__: true,
    },
    // Возможно, у вас есть настройки parser и parserOptions для TypeScript
    // parser: '@typescript-eslint/parser',
    // parserOptions: { ... },
};
