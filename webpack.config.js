var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname,
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:7060', // WebpackDevServer host and port || remove when building for prod
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors || remove when building for prod
        path.resolve(__dirname, './js/index.js')
    ],
    output: {
        // path: path.resolve(__dirname, '/'),
        path: './dist',
        publicPath: "/assets/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: [
                'react-hot', // remove when building for prod
                'babel?plugins[]=transform-es2015-modules-commonjs,presets[]=react'
            ]
        }]
    },
    devServer: {
        historyApiFallback: {
            index: './index.html',
            // rewrites: [
            //     {
            //         from: /\/item/,
            //         to: '/index.html'
            //     }
            // ]
        },
        port: 7060
    },
    // don't use this with webpack-dev-server --hot
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('production')
        //     }
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: true
        //     }
        // })
        // new webpack.HotModuleReplacementPlugin()
    ]
}