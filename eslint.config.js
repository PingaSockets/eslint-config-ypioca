// eslint.config.js - CommonJS
const tseslint = require('@typescript-eslint/eslint-plugin');
const parser = require('@typescript-eslint/parser');
const eslintStylePlugin = require('@stylistic/eslint-plugin');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const depend = require('eslint-plugin-depend'); // suggest alternatives to various dependencies
const sonarjs = require('eslint-plugin-sonarjs'); // JS/TS rules from SonarJS
const eslintPluginUnicorn = require('eslint-plugin-unicorn'); // More than 100 powerful ESLint rules
const jsdoc = require('eslint-plugin-jsdoc');
const pluginPromise = require('eslint-plugin-promise'); // Enforce best practices for JavaScript promises
const regexp = require("eslint-plugin-regexp");

//const globals = require('globals');

module.exports = [
  depend.configs['flat/recommended'],
  sonarjs.configs.recommended,
  eslintPluginUnicorn.configs['flat/recommended'], // Create the plugin here. No need to add below.
  jsdoc.configs['flat/recommended'],
  pluginPromise.configs['flat/recommended'], // Create the plugin here. No need to add below.
  regexp.configs["flat/recommended"],
  {
    files: ['**/*.js', '**/*.ts'],
    plugins: {
      '@typescript-eslint': tseslint,
      '@eslint-stylistic': eslintStylePlugin,
  	  'simple-import-sort': simpleImportSort,
      jsdoc,
      //regexp
    },
    languageOptions: {
      parser: parser,
      sourceType: 'module',
      ecmaVersion: 'latest',
      //globals: globals.builtin,
      parserOptions: {
        project: true,
        //tsconfigRootDir: process.cwd()
      }
    },
	
	// Regras de lint    
    rules: {
        // Regras do ESLint padrão
        "max-depth": ["error", 4],
        "no-unneeded-ternary": ["error"],
        "no-constant-condition": ["error"],
        "no-constant-binary-expression": "error",
        "no-trailing-spaces": "error",
        "no-multi-spaces": "error",
        "space-infix-ops": "error",
        "eqeqeq": "error",
        "func-names": ["error", "never"],
        "no-unused-vars": "off",
        "semi": ["error", "never"],
  
        // Regras TypeScript
        "@typescript-eslint/no-misused-promises": [
          "error",
          {
            checksSpreads: true,
            checksVoidReturn: false,
            checksConditionals: true,
          },
        ],
        "@typescript-eslint/prefer-optional-chain": ["error"],
        "@typescript-eslint/no-unnecessary-type-assertion": ["error"],
        "@typescript-eslint/no-unnecessary-type-constraint": ["error"],
        "@typescript-eslint/no-redundant-type-constituents": ["error"],
        "@typescript-eslint/no-inferrable-types": ["error"],
        "@typescript-eslint/no-explicit-any": [
          "warn",
          {
            ignoreRestArgs: true,
          },
        ],
        "@eslint-stylistic/type-annotation-spacing": "error",
        "@eslint-stylistic/member-delimiter-style": [
          "error",
          {
            multiline: {
              delimiter: "none",
              requireLast: false,
            },
            singleline: {
              delimiter: "comma",
              requireLast: false,
            },
          },
        ],
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/explicit-function-return-type": "off", // error
        "@typescript-eslint/no-deprecated": "error",

        // SonarJS Rules
        "sonarjs/cognitive-complexity": "warn",
        "sonarjs/todo-tag": "warn",

        // Unicorn Rules
        "unicorn/better-regex": "warn",

        // JSDoc Rules
        'jsdoc/require-description': 'warn',

        // Promise Rules
        "promise/always-return": "error",

        // RegExp Rules
        "regexp/no-useless-assertions": "error",

        // Estilos de código
        "camelcase": [
          "error",
          {
            ignoreGlobals: true,
            ignoreImports: true,
          },
        ],
        "no-restricted-syntax": [
          "error",
          {
            selector: "TSEnumDeclaration",
            message: "Don't declare enums, use literals instead",
          },
        ],
        "indent": ["error", "tab"],
        "quotes": [2, "single", { avoidEscape: true }],
        "object-curly-spacing": ["error", "always"],
        "space-in-parens": ["error", "never"],
        "curly": [2, "all"],
        "brace-style": ["error"],
        "linebreak-style": ["error", "unix"],
        "keyword-spacing": [
          "error",
          {
            overrides: {
              if: { after: false },
              for: { after: false },
              while: { after: false },
              catch: { after: false },
            },
          },
        ],
        "padding-line-between-statements": [
          "error",
          { blankLine: "always", prev: "function", next: "*" },
          { blankLine: "always", prev: "block-like", next: "*" },
          { blankLine: "always", prev: "import", next: "block-like" },
        ],
        "func-style": ["error", "declaration", { allowArrowFunctions: true }],
        "prefer-const": "error",
        "prefer-arrow-callback": "error",
        "arrow-spacing": ["error"],
        "implicit-arrow-linebreak": ["error", "beside"],
        "no-multiple-empty-lines": "error",
        "space-before-blocks": "error",
        "comma-spacing": "error",
        "jsx-quotes": ["error", "prefer-single"],
  
        // Simple Import Rules
        "simple-import-sort/imports": [
          "error",
          {
            groups: [["^@?\\w", "^(components|modules|utils)(/.*|$)", "^\\u0000", "^\\.\\.(?!/?$)", "^\\.\\./?$", "^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"]],
          },
        ],
      }
	  
  },
  {
    ignores: [
      "node_modules/",
      "dist/",
      "build/"
    ]
  }
];