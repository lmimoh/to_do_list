// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry : './src/index.js',
    output : {
        path: path.resolve(__dirname, 'docs'), // './dist'의 절대 경로를 리턴합니다.
        filename: 'app.js',
    },
    mode : 'development',
    module : {
        rules : [
            {
                test: /\.jsx?$/,
                exclude: '/node_modules',
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env', ['@babel/preset-react', {'runtime' : 'automatic'}]
                    ]
                }
            },
            {
                test : /\.css$/,
                use : ["style-loader", "css-loader"],
                exclude : /node_modules/,
            },
            {
                test : /\.(png|jpe?g|gif|svg|webp)$/i,
                use : {
                    loader: 'file-loader',
                },
            }
        ],
    },
    plugins : [ 
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src", "index.html") })
    ],
    devServer : {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        open: true,
        port: 'auto',
        hot: true,
    },
};