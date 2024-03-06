import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const {isDev} = options;

  const cssLoader = {
    test: /\.(sass|less|css)$/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          }
        },
      },
      'sass-loader',
    ],
  };

  const fontLoader = {
    test: /\.woff2?$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/fonts/'
        }
      }
    ]
  };

  const imageLoader = {
    test: /\.(png|jpe?g|gif|webp)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: 'assets/img/',
        }
      },
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: {
      loader: 'svg-url-loader',
      options: {
        encoding: 'base64',
        outputPath: 'assets/img/',
      }
    }
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    typescriptLoader,
    fontLoader,
    imageLoader,
    svgLoader,
    cssLoader
  ];
}
