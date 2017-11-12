const webpack = require('webpack')

module.exports = {
    entry: './src/app.js',

    output: {
        path: __dirname,
        filename: './public/js/app.js'
    },

    devServer: {
        inline: true,
        port: 3000
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
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom'
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: true
        })
    ]
}
