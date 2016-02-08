const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: path.join(__dirname, 'src'),
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'react': path.resolve('../node_modules/react'),
      'react-dom': path.resolve('../node_modules/react-dom'),
    },
  },
};
