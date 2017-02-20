const path = require('path');
var CompressionPlugin = require('compression-webpack-plugin');

// TODO-FUTURE: jlevine - Maybe use CommonsChunk pluging if there's a lot of common code
// TODO-FUTURE: jlevine - https://webpack.js.org/plugins/commons-chunk-plugin/
// TODO-FUTURE: jlevine - Maybe use ExtractTextWebpackPlugin to separate css files from js file?
// TODO-FUTURE: jlevine - https://webpack.js.org/plugins/extract-text-webpack-plugin/
// TODO: jlevine - Add hash into bundle name, not for prod
// TODO: jlevine - Do I need this for DefinePlugin below? Is the global used later in the code? If so, maybe put it
// TODO: jlevine - right down where it's used or should all "prod determination" be up here?
// const GLOBALS = {
//   'process.env.NODE_ENV': JSON.stringify('production')
// };

const PROD = process.env.NODE_ENV === 'production';
const FLASK_JS_PATH = path.resolve(__dirname, '..', 'server', 'static', 'js');
const OUTPUT_PATH = PROD ? path.resolve(__dirname, 'dist') : FLASK_JS_PATH;

module.exports = {
  // TODO: jlevine - Change dev to 'cheap-module-eval-source-map' if compilation takes a while.
  // TODO: jlevine - Change to 'eval-source-map' if watch ain't working out for you.
  // TODO: jlevine - Change prod to 'hidden-source-map' if you wanna be sneaky.
  devtool: PROD ? 'source-map' : 'inline-source-map',
  entry: './app/index.js',
  // TODO: jlevine - Uncomment if hot reloading is failing a lot.
  // entry: PROD ? './app/index.js' :
  // [
  //   'webpack-hot-middleware/client?reload=true', // reloads the page if hot module reloading fails.
  //   './app/index'
  // ],
  // TODO: jlevine - Uncomment if this file ends up short and you'd rather be precise rather than use default value.
  // target: 'web',
  output: {
    path: OUTPUT_PATH,
    // TODO: jlevine - Uncomment if you feel there's a need for prod rename of output dir
    // path: PROD ? __dirname + '/build' : __dirname + '/dist',
    filename: 'bundle.js',
    // TODO: jlevine - I think this is a performance optimization, so only do it for prod?
    devtoolLineToLine: PROD,
    // TODO: jlevine - Uncomment if you think you need one (maybe '/' or '/static/', or '/assets/')
    // publicPath: '/'

  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  plugins: [
        new CompressionPlugin({
            asset: "bundle.gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.html$|\.css$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
};
