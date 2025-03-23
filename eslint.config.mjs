import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.node,
      parser: tseslint.parser,
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      js,
      react: pluginReact,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
      prettier,
      eslintPluginPrettierRecommended,
    ],
    rules: {
      quotes: ["error", "double"],
      "no-multi-spaces": "error",
      "no-trailing-spaces": "error",
      indent: ["error", 2],
      "space-in-parens": ["error", "never"],
      "space-before-function-paren": ["error", "never"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "comma-spacing": ["error", { before: false, after: true }],
      "react/react-in-jsx-scope": "off",
    },
  },
]);
