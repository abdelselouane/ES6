
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // Required
            inject: false,
            template: require('html-webpack-template'),
            // Optional
            appMountId: 'app',
            appMountHtmlSnippet: '<h1>Webpack & ES6 Modules </h1><div class="results"><p id="resultGreeting"></p><p id="resultSum"></p><p id="resultProduct"></p></div>',
            headHtmlSnippet: '<style>* {box-sizing: border-box;}body{font-family: sans-serif;margin: 0 auto;max-width: 30rem;}a{color: RoyalBlue;}.results {background-color: WhiteSmoke;display: inline-block;margin: 1rem 0;padding: .5rem 1.5rem;width: 100%;}</style >',
            bodyHtmlSnippet: '<app-router></app-router>',
            baseHref: '/',
        })
    ],
    devServer: {
        open: true,
        index: 'index.html',
        contentBase: __dirname + 'dist',
        compress: true,
        port: 9000
    }
};