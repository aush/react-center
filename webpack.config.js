const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.join(__dirname, 'src');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    library: 'ReactStack',
    libraryTarget: 'umd',
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: [
        SRC_DIR,
        path.join(__dirname, 'index'),
      ],
    }],
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  resolve: { extensions: ['', '.js', '.jsx'] },
};
