const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'), // where to save the bundle.js
    filename: 'bundle.js',
    publicPath: 'build/' //
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        // use: ['style-loader', 'css-loader'], // applied right to left
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          // 'url-loader', // manage the images based on result after compression
          {
            loader: 'url-loader?limit=40000', // if image is greater than 40kb save it separately
          },
          'image-webpack-loader' // compress the images
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css') // save all styles grabbed from ExtractTextPlugin loader and saves it to 'style.css'
  ]
};

module.exports = config;
