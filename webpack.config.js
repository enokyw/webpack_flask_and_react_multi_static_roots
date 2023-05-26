const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.[hash].js',
        path: path.resolve(__dirname, 'app/build/static'),
        clean: true,
    },

    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.js','.jsx'],
                },
            },
            {
                test: /\.css/,
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: "../templates/base.html",
            template: 'src/base.html',
            inject: false
        }),
    ],
};