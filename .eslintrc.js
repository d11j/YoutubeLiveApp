/* eslint-disable */
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "eslint-config-prettier",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  ignorePatterns: ["./.eslintrc.js"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "prettier/prettier": [
      "warn",
      {
        printWidth: 150,
        singleQuote: false,
        semi: true,
        tabWidth: 2,
        endOfLine: "lf",
        trailingComma: "es5",
      },
    ],
  },
};
