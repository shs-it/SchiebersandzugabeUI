const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
var webpack = require('webpack');

module.exports = {
    mode: 'development',
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "./*.html",
                },
                {
                    from: "./src/components/**/**/*.html",
                    to: path.resolve(__dirname, 'dist/webguis/einsatzstoffe/schiebersandzugabeui')
                },
                {
                    from: "./src/components/**/**/*.css",
                    to: path.resolve(__dirname, 'dist/webguis/einsatzstoffe/schiebersandzugabeui')
                },
                {
                    from: "./src/view/*.*",
                    to: path.resolve(__dirname, 'dist/webguis/einsatzstoffe/schiebersandzugabeui')
                },
                {
                    from: "./rap/*.jap",
                    to: "../../../stw/einsatzstoffe/[name][ext]",
                },
                {
                    from: "./rap/*.jar",
                    to: "../../../lib/[name][ext]",
                },
            ],
        }),

        new webpack.DefinePlugin({
            process: {
                env: {
                    APP_ENV: '"' + (process.env.APP_ENV ?? "") + '"',
                    NODE_TESTHOST: '"int1ans"',
                }
            }
        }),
    ],
    devtool: 'inline-source-map',
    entry: {
        SchiebersandzugabePresenter: './src/components/schiebersandzugabe/presenter/SchiebersandzugabeInitializer.ts',
    },
    output: {

        // filename: 'index.js',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/webguis/einsatzstoffe/schiebersandzugabeui'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                loader: 'ts-loader'

            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],

            },
        ]

    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};