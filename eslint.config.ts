import { defineConfigWithVueTs } from '@vue/eslint-config-typescript'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'

export default defineConfigWithVueTs(
  {
    ignores: ['node_modules/**', 'dist/**', '*.d.ts'],
  },
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    extends: [...tseslint.configs.recommended, eslintConfigPrettier],
    rules: {
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': [
        'warn',
        { allowShortCircuit: true, allowTernary: true },
      ],
      'no-debugger': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'max-len': [
        2,
        {
          ignoreStrings: true,
          code: 80,
          tabWidth: 2,
          ignoreComments: true,
          ignoreUrls: true,
          ignoreTrailingComments: false,
          ignorePattern: '\\s*background-image:\\s*url\\(',
        },
      ],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: 'block-like',
          next: '*',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'if',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
      ],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
    },
  },
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: {
          ts: '@typescript-eslint/parser',
          js: 'espree',
        },
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    extends: [
      ...tseslint.configs.recommended,
      eslintConfigPrettier,
      pluginVue.configs['flat/recommended'],
    ],
    rules: {
      'vue/singleline-html-element-content-newline': 'off',
      'vue/block-lang': 'off',
      'vue/html-indent': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/prop-name-casing': 0,
      'vue/require-default-prop': 0,
      '@typescript-eslint/no-unused-expressions': 'off',
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: 'block-like',
          next: '*',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'if',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
      ],
      'vue/max-len': [
        'error',
        {
          template: 80,
          ignoreStrings: true,
          code: 80,
          tabWidth: 2,
          ignoreComments: true,
          ignoreUrls: true,
          ignoreTrailingComments: false,
          ignorePattern: '\\s*background-image:\\s*url\\(',
        },
      ],
    },
  },
)
