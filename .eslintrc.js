module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    // ... ваши текущие настройки extends, plugins, rules ...
    extends: [
        "airbnb", // или другие основные конфиги
        // ... другие расширения ...
        "plugin:prettier/recommended", // <-- Добавить это В КОНЕЦ массива extends
    ],

    plugins: [
        "react",
        "@typescript-eslint",
        // "plugin:react/jsx-runtime",
        // ... ваши текущие плагины ...
        "prettier", // <-- Добавить этот плагин
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
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "import/prefer-default-export": "off",
        // ... ваши текущие переопределенные правила ...
        // Здесь можно добавить/переопределить правила при необходимости
    },
    // Возможно, у вас есть настройки parser и parserOptions для TypeScript
    // parser: '@typescript-eslint/parser',
    // parserOptions: { ... },
};
