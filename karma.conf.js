const path = require('path');

const _IS_CI_ = process.env.CONTINUOUS_INTEGRATION;
const _IS_TRAVIS_CI_ = process.env.TRAVIS;
const _IS_BUILDING_PACKAGE_ = process.env.NODE_ENV === 'production';

module.exports = config => {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'source-map-support'],
    reporters: _IS_TRAVIS_CI_ ?
      ['mocha', 'coverage', 'coveralls'] :
      ['mocha', 'coverage'],
    coverageReporter: _IS_CI_ ?
      { type: 'lcov', dir: 'coverage/' } :
      { type: 'html', dir: 'coverage/' },
    autoWatch: _IS_CI_ ? false : true,
    singleRun: (_IS_CI_ || _IS_BUILDING_PACKAGE_) ? true : false,
    browsers: _IS_TRAVIS_CI_ ?
      ['Chrome_travis_ci'] :
      ['Chrome'],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox'],
      },
    },
    files: [
      './test/**/*.spec.js*',
    ],
    preprocessors: {
      './test/**/*.spec.js*': ['webpack'],
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        noParse: [/node_modules\/sinon\//],
        loaders: [{
          test: /\.jsx?$/,
          loader: 'babel',
          include: [
            path.join(__dirname, 'test'),
            path.join(__dirname, 'src'),
          ],
        }, {
          test: /\.json$/,
          loader: 'json',
        }, {
          test: /sinon.*\.js$/,
          loader: 'imports?define=>false,require=>false',
        }],
        postLoaders: [{
          test: /\.jsx?$/,
          loader: 'istanbul-instrumenter',
          include: [
            path.join(__dirname, 'src'),
          ],
        }],
      },
      node: {
        fs: 'empty',
      },
      resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        alias: {
          'sinon': 'sinon/pkg/sinon',
        },
      },
      externals: {
        'jsdom': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
      },
    },
    webpackMiddleware: {
      noInfo: true,
    },
  });
};
