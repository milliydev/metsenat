import globals from "globals";
import pluginJs from "@eslint/js";
import { rules } from "eslint-plugin-vue";

export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      quotes: ["error", "double"],
      semi: ["error","always"]
    },
    ignores: ["dist/", "node_modules/"]
  },
  pluginJs.configs.recommended,
];
