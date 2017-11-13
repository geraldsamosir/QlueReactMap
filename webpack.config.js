path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: './src/app.js',
  output: {
        path: __dirname,
        filename: './public/js/app.js'
  },
    module: {
        loaders: [
            {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'

            }
        ],
        
    }

};