var path = require('path')
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = relativePath => path.resolve(__dirname, '..', relativePath);

module.exports = {
	mode: 'development',
    entry: {
        app: './src/dev.js'
    },
    devServer: {
		hot: true,
		watchOptions: {
			poll: true
		},
        historyApiFallback: {
            disableDotRule: true
        },
        //contentBase: "./src/assets/",
        contentBase: path.join(__dirname, "/src/assets"),
        publicPath: "/dist/",

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
    ],
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist'),
        //publicPath: '/assets',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ['vue-style-loader', {
                        loader: 'css-loader',
                        }],
                        js: [
                            'babel-loader',
                        ],
                    },
                    cacheBusting: true,
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    resolve('src'),
                    resolve('node_modules/webpack-dev-server/client'),
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: '/images/[hash]-[name].[ext]'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
};
