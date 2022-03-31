/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  entry: {
    icons: ['babel-polyfill', './dist/icons.js'],
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.svg$/,
        include: path.join(__dirname, 'dist', 'icons'),
        use: 'svg-inline-loader',
      },
      {
        // Only run `.js` files through Babel
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // {
      //   test: /\.ts$/,
      //   use: [
      //     {
      //       loader: 'ts-loader',
      //       options: {
      //         configFile: 'tsconfig.json',
      //       },
      //     },
      //   ],
      //   exclude: /node_modules/,
      // },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: '[name]_compiled.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  optimization: {
    usedExports: true,
    minimize: true,
  },
};
