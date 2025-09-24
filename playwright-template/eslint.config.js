// eslint.config.js
import tseslint from 'typescript-eslint';
import eslintPluginPlaywright from 'eslint-plugin-playwright';
import eslintConfigPrettier from 'eslint-config-prettier';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended, // parser + TS rules
  // Only lint Playwright test files with Playwright rules
  {
    files: ['**/{tests,test,e2e}/**/*.@(ts|tsx)', '**/*.spec.ts', '**/*.e2e.ts'],
    plugins: { playwright: eslintPluginPlaywright },
    rules: {
      ...eslintPluginPlaywright.configs.recommended.rules,
    },
  },
  // Turn off rules that conflict with Prettier
  eslintConfigPrettier,
];
