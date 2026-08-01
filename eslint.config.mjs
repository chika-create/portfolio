// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypeScript from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier';

const config = [
  ...nextCoreWebVitals,
  ...nextTypeScript,
  ...storybook.configs["flat/recommended"],
  eslintConfigPrettier,
];

export default config;
