import js from '@eslint/js';
import eslintPluginReact from 'eslint-plugin-react';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    files: ['**/*.{js,jsx}'],
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      // Estilo que pediste ✨
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],

      // Reglas para React
      'react/react-in-jsx-scope': 'off', // No es necesario en Next.js
      'react/prop-types': 'off', // Solo si no usás PropTypes
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
