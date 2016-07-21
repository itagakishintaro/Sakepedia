// var ExtractTextPlugin = require( 'extract-text-webpack-plugin' ); // only need raw css
const path = require( 'path' );

module.exports = {
  entry: {
    bundle: './src/app.js'
  },
  output: {
    path: path.join( __dirname, 'public/javascripts' ),
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /node_modules/,
        test: /\.js[x]?$/,
        query: {
          cacheDirectory: true,
          presets: [ 'react', 'es2015' ]
        }
      }, {
        test: /\.scss$/,
        // loader: ExtractTextPlugin.extract( 'style-loader', 'css-loader!sass-loader' ) // need raw css
        loaders: [ 'style', 'css?sourceMap&modules', 'sass?sourceMap&modules' ] // don't need raw css
      }
    ]
  },
  plugins: [
    // new ExtractTextPlugin( '../stylesheets/styles.css' ) // only need raw css
  ]
};
