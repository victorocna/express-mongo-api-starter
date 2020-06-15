const TerserPlugin = require('terser-webpack-plugin');
const { IgnorePlugin } = require('webpack');

module.exports = {
  optimization: {
    // minimize everything on production
    minimize: true,
    minimizer: [new TerserPlugin({ terserOptions: { mangle: false } })],
  },
  plugins: [
    // add your own ignore rules in the following regexp
    new IgnorePlugin(new RegExp('^(mongodb-client-encryption)$')),
  ],
};
