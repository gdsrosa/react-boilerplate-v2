const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = ({ mode }) => ({
  mode,
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
  devServer: {
    hot: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      filename: 'index.html',
    }),
    new webpack.ProgressPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      ducks: path.resolve(__dirname, 'src/ducks/'),
      static: path.resolve(__dirname, 'src/static/'),
    },
  },
});
