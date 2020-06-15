const TerserPlugin = require('terser-webpack-plugin');
const { IgnorePlugin } = require('webpack');

module.exports = {
  optimization: {
    // do not minimize for development mode
    minimize: false,
    minimizer: [new TerserPlugin({ terserOptions: { mangle: false } })],
  },
  plugins: [
    // add your own ignore rules in the following regexp
    new IgnorePlugin(new RegExp('^(mongodb-client-encryption)$')),
  ],
};
