/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
// const nodeExternals = require('webpack-node-externals');

const browserConfig = {
  mode: 'development',
  entry: './src/App.jsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  ie: '11',
                  edge: '15',
                  safari: '10',
                  firefox: '50',
                  chrome: '49',
                },
              }],
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
    },
  },
  devtool: 'source-map',
};

const serverConfig = {
  mode: 'development',
  entry: './server/uiserver.js',
  target: 'node',
  // externals: [nodeExternals()],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: { node: '10' },
              }],
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  devtool: 'source-map',
};

// module.exports = [browserConfig, serverConfig];
module.exports = browserConfig;