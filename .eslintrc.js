module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import',
    'eslint-plugin-tsdoc',
    'simple-import-sort'
  ],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  env: {
    jest: true,
    node: true
  },
  rules: {
    'no-console': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-dupe-class-members': ['error'],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/no-inferrable-types': ['off'],
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn'
  }
};
