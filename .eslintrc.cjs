module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Memerlukan penggunaan titik koma
    'semi': ['error', 'always'],
    // Memerlukan penggunaan petik tunggal
    'quotes': ['error', 'single'],
  },
}
