const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    compress: true,
    port: 8080,
    open: false,
    historyApiFallback: true,
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
        },
      }),
    ],
  },

  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/img/',
            }
          },
        ],
      },

      {
        test: /\.html$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },

      {
        test: /\.svg$/,
        use: {
          loader: 'svg-url-loader',
          options: {
            encoding: 'base64',
            outputPath: 'assets/img/',
          }
        }
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx']
  },
  devtool: 'source-map',
};
