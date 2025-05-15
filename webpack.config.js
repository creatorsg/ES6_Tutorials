const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

let htmlPageNames = ['ratefinder'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
    chunks: [`${name}`] // respective JS files
  })
});

module.exports = {
  //entry: './js/main.js',
  entry: {
    app: './js/main.js',
    ratefinder: './js/ratefinder.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    //filename: 'main.bundle.js'
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      chunks: ['app']
    })
  ].concat(multipleHtmlPlugins),
  devServer: {
    port: 8081,
    open: true,
    hot: false,
    liveReload: true,
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  mode: 'development',
};