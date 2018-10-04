const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const myEnv = require('dotenv').config();


module.exports = {

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    resolve(__dirname, "src", "index.jsx")
  ],

  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devtool: '#source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: "pre",
        loader: "eslint-loader",
        exclude: /node_modules/,
        options: {
          emitWarning: true,
          configFile: "./.eslintrc"
          }
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
        test: /\.(png|jpg|gif)$/i,
        use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192
              }
            }
          ]
        },
        {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ["es2015", {"modules": false}],
            "react",
          ],
          plugins: [
            "react-hot-loader/babel"
          ]
        }
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template:'template.ejs',
      appMountId: 'react-app-root',
      title: 'Capstone',
      filename: resolve(__dirname, "build", "index.html"),
    }),
    new webpack.DefinePlugin({
    TRIMET_KEY: JSON.stringify(myEnv.parsed.TRIMET_KEY)
    }),
  ]
};
