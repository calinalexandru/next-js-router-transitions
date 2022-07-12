// const withPlugins = require('next-compose-plugins');
// const withTranspiledModules = require('next-transpile-modules')([
//   '@pericles/util',
// ]);
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
// enabled: process.env.ANALYZE === 'true',
// })

// module.exports = withPlugins([[withTranspiledModules]], {
module.exports = {
  env: {
    NEXT_PUBLIC_APP_VERSION: require('./package.json').version,
  },
};
