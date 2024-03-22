module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  ignorePatterns: ['**/tests/*.js', '**/*.test.js', '**/test.js'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['scripts/**/*.js'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
  },
};
