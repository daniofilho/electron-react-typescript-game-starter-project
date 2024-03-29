// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createWebpackAliases } = require('./webpack.helpers');

// Webpack aliases to resolve
const aliases = createWebpackAliases({
  '~': 'src/app',
  '@src': 'src',
  '@static': 'src/static',
});

// Export aliases
module.exports = aliases;
