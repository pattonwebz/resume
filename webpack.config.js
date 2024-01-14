// webpack.config.js
const path = require('path');
const sass = require('sass');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/scss/main.scss', // change the entry point to your main.scss file
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/i, // add a new rule for .scss files
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css', // the output CSS file will still be named style.css
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9001,
    open: true,
    hot: true,
  },
};
