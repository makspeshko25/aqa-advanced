import globals from 'globals';
import pluginJs from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2021, // Використання сучасного синтаксису ES2021+
      sourceType: 'module' // Дозволяє використовувати import/export
    },
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      'coverage/',
      '.vscode/',
      '.next/',
      'public/',
      '.env' // Ignore environment files
    ]
  },
  pluginJs.configs.recommended,
  prettierConfig, // Ensures Prettier and ESLint don’t conflict
  {
    plugins: { prettier },
    rules: {
      'no-unused-vars': 'warn', // Попередження про невикористані змінні
      'no-console': 'warn', // Попередження про використання console.log()
      eqeqeq: 'error', // Вимагає використовувати === замість ==
      curly: 'error', // Вимагає {} у блоках if, while, for
      quotes: ['error', 'single'], // Одинарні лапки ('')
      semi: ['error', 'always'], // Вимагає крапку з комою
      indent: ['error', 2], // Відступ 2 пробіли
      'comma-dangle': ['error', 'never'], // Забороняє кому в кінці об'єктів/масивів
      'prettier/prettier': 'error', // Make Prettier issues show as ESLint errors
    }
  },
];
