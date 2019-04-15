/**
 * Project's customized Webpack Configuration Extension
 * ----------------------------------------------------
 *
 * this file is heavily inspired by `react-app-rewired` mechanism.
 *
 * it simply gives you the chance to hook into the default Webpack
 * configuration as it is provided by `create-react-app`, and to
 * change it so to match your project's needs.
 *
 * If you want to check out the default values look into:
 * `./node_modules/marcopeg-react-scripts/config/webpack.config.${env}.js`
 *
 */

const CopyPlugin = require('copy-webpack-plugin');

module.exports = (webpackConfig, env, { paths }) => {
  //Add babel decorators plugin
  webpackConfig.module.rules[2].oneOf[1].options.plugins.push([
    "@babel/plugin-proposal-decorators", {
      legacy: true
    }
  ]);
  webpackConfig.plugins.push(
    new CopyPlugin([
      {
        from: 'assets',
        to: 'assets'
      }
    ])
  );
  return webpackConfig
}
