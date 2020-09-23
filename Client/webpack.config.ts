import * as path from 'path';
import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin'

const isProd = false;

const tsLoaders: webpack.RuleSetUseItem[] = ['babel-loader'];
if (!isProd) {
    tsLoaders.push('eslint-loader');
}

const BaseConfig: webpack.Configuration = {
    mode: isProd ? "production" : "development",
    target: "web",
    entry: {
        index: [
            '@babel/polyfill',
            path.resolve(__dirname, 'src/index.tsx')
        ],
    },
    output: {
        path: path.resolve(__dirname, '../wwwroot'),
        filename: '[name].bundle.js'
    },
    resolve:
    {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".scss", ".sass"]
    },
    devtool: isProd ? false : "source-map",
    optimization: {
        minimize: isProd,
        namedChunks: true,
        chunkIds: "named",
        mergeDuplicateChunks: true,
        occurrenceOrder: true,
        concatenateModules: true,
        sideEffects: false,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "index",
                    chunks: "all",
                    priority: 10
                }
            },
            chunks: 'async',
            minSize: 5000,
            maxSize: 0,
            minChunks: 2,
            maxAsyncRequests: 5,
            maxInitialRequests: 4,
            automaticNameDelimiter: '~',
            name: true
        }
    },
    module:
    {
        rules: [
            {
                test: /\.tsx?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: [
                    path.resolve(__dirname, 'test'),
                    /[\\/]node_modules[\\/]/
                ],
                use: tsLoaders
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg|ico|pdf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({ // <-- key to reducing React's size
            'process.env': {
                'NODE_ENV': isProd ? JSON.stringify('production') : JSON.stringify('development')
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),// Merge chunks
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './templates/index.template.html',
            chunks: ['index'],
            favicon: './assets/favicon.ico'
        })
    ]
};

export default BaseConfig;