var path = require('path');
const webpack = require('webpack');

var rootPath = path.resolve(__dirname), // 项目根目录
  src = path.join(rootPath, 'src'); // 开发源码目录

let envToBeInjected = {
  __START_OPTION__: process.env.START_OPTION
};

let alias = {
  // 自定义路径别名
  SRC: src,
  ASSET: path.join(src, 'assets'),
  COMPONENT: path.join(src, 'components'),
  MODEL: path.join(src, 'models'),
  ROUTE: path.join(src, 'routes'),
  SERVICE: path.join(src, 'services'),
  UTIL: path.join(src, 'utils'),
  VIEW: path.join(src, 'views')
}

module.exports = function(webpackConfig, env) {
  envToBeInjected = Object.assign(envToBeInjected, { NODE_ENV: env })
    // 对roadhog默认配置进行操作，比如：
  webpackConfig.plugins[0] = new webpack.DefinePlugin({
    'process.env': JSON.stringify(envToBeInjected)
  });

  webpackConfig.resolve.alias = Object.assign(webpackConfig.resolve.alias || {}, alias)

  return webpackConfig
};
