const path = require('path');

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
  // TODO: jlevine - Do we need this at all since we're using Flask?
  devServer: {
    // TODO: jlevine - Remove if you feel the need for more logs when building (default is 'info').
    // clientLogLevel: 'none',
    // TODO: jlevine - Maybe change this to just 'server', or maybe 'assets' to stay consistent?
    contentBase: path.join(__dirname, 'server', 'static', 'js'),
    // TODO: jlevine - Uncomment if you need to compile less because it's slow.
    lazy: true,
    filename: 'bundle.js',
    // TODO: jlevine - Uncomment if this is not default, or you want to be explicit.
    // hot: true
    // TODO: jlevine - Uncomment: change to false if you hate them, true if you need it and want it.
    // noInfo: true
    // TODO: jlevine - Add proxy stuff if you end up needing it when the API starts.
    // TODO: jlevine - Uncomment if you need to public path. Make sure it's the same as the output.publicPath
    // TODO: jlevine - Pissibilities: '/' or '/static/', or '/assets/'
    publicPath: '/',
    // TODO: jlevine - Remove if the default seems to be false
    quiet: false,
    // TODO: jlevine - Uncomment if you want custom messages (eg. only errors) being sent out (remove noInfo and quiet)
    // stats: 'errors-only'
    // TODO: jlevine - Remove if you don't seem to need to watch it.web
    watchContentBase: true
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  }
};
