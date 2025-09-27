const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_models/,
                loader: 'babel-loader',
            },
            {
                test: /\.txt$/, //регулярное выражение
                loader: 'raw-loader', // позволяет прочитать содержимое файла в текст
            },
            {
                test: /\.css$/, //регулярное выражение
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Здесь указали файл
            filename: 'main.html' // здесь его переименовали
        }),
        new MiniCSSExtractPlugin()
    ]
}