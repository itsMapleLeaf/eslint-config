/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
    project: "./tsconfig.json",
    extraFileExtensions: [".cjs", ".mjs"],
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/array-type": ["warn", { default: "array-simple" }],
    "@typescript-eslint/no-floating-promises": "warn",
    "class-methods-use-this": "warn",
    "jsx-a11y/no-onchange": "off",
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "warn",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-useless-rename": "warn",
    "object-shorthand": "warn",
    "react-hooks/exhaustive-deps": ["warn"],
    "react/react-in-jsx-scope": ["off"],
  },
  ignorePatterns: [
    "**/node_modules/**",
    "**/dist/**",
    "**/build/**",
    "**/release/**",
    "**/docs/**",
    "**/.cache/**",
    "src/generated/**",
  ],
  settings: {
    react: { version: "latest" },
  },
}
