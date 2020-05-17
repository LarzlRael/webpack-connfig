
const htmlPlugin = require('html-webpack-plugin');
const mini_css_extract_plugin = require('mini-css-extract-plugin')
module.exports = {
    entry: './src/js/app.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    devServer: {
        port: 5500
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    { loader: mini_css_extract_plugin.loader },
                    { loader: "css-loader" },
                    { loader: "sass-loader" },
                ]
            }
        ]
    },
    plugins: [
        new htmlPlugin({
            template: './src/index.html'
        }),
        new mini_css_extract_plugin({
            filename : 'bundle.css'
        })
    ]

}