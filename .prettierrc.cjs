module.exports = {
  // Prettier default config
  arrowParens: 'always',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',

  // Prettier sort imports and tailwind css
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  // Similar to Alt+Shift+O in VS Code
  importOrder: [
    '^@(.*)$', // @aws-sdk/client-s3
    '<THIRD_PARTY_MODULES>', // lodash
    '^[./]', // everything else
  ],
  importOrderSortSpecifiers: true,
};
