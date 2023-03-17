module.exports = {
    env: {
        es6: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/eslint-recommended-requiring-type-checking"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname
    },
    plugins: ["@typescript-eslint"]
};
