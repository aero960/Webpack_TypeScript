const statementConfig = require("./stmconfig.js");
module.exports = {
    module: {
        rules: [

            /**
             * For es6 compile
             */
            {
                test: [/\.js$/],
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env',
                                  '@babel/preset-typescript'],

                        plugins: ['@babel/plugin-proposal-class-properties',
                                  '@babel/plugin-proposal-throw-expressions',
                                  '@babel/plugin-transform-typescript']
                    }
                }
            },
            /**
             * For vue load
             */
            {
                test: /\.vue$/,
                loader: 'vue-loader'

            },

            /**
             * for pug compile
             */
            /*

                        {
                            test: /\.pug$/,
                            oneOf: [
                                // this applies to `<template lang="pug">` in Vue components
                                {
                                    resourceQuery: /^\?vue/,
                                    use: ['pug-plain-loader']
                                },
                                // this applies to pug imports inside JavaScript
                                {
                                    use: ['pug-loader','raw-loader', 'pug-plain-loader']
                                }
                            ]
                        },
            */

            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'awesome-typescript-loader' //   "ts-loader",
                    }
                ]

            },
            {
                test: /\.(png|jpeg|ttf|jpg)$/,
                use: [{loader: 'url-loader', options: {limit: 8192}}]
            },
            /**
             * For scss and css compile
             */
            {
                test: /\.s[ac]ss$/i,
                //by webpack kompilowal css i scss musza byc uzyte te 2 loadery scss i css
                use: ['style-loader', 'vue-style-loader', 'css-loader', 'sass-loader']
            }]
    }
}
