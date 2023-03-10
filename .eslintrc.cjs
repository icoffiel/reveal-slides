module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["prettier"],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: "module",
    },
    plugins: ["@html-eslint", "html", "prettier"],
    rules: {
        "prettier/prettier": "error",
    },
    overrides: [
        {
            files: ["*.html"],
            parser: "@html-eslint/parser",
            extends: ["plugin:@html-eslint/recommended"],
        },
    ],
};