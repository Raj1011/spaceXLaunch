const path = require('path');
const webpack = require('webpack');
var WebpackShellPlugin = require('webpack-shell-plugin');

// if (process.env.NODE_ENV !== 'production') {
//     config.plugins.push(new WebpackShellPlugin({onBuildEnd: ['nodemon dist/server.js --watch build']}));
// }
module.exports = {
    mode: 'development',
    entry: {
        server: './server.ts'
    },
    resolve: { extensions: ['.ts', '.js'] },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    target:'node',
    watchOptions: {
        ignored: /node_modules/
      },
    module:{
        rules: [
            { test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader' },
            {
                // Mark files inside `@angular/core` as using SystemJS style dynamic imports.
                // Removing this will cause deprecation warnings to appear.
                test: /(\\|\/)@angular(\\|\/)core(\\|\/).+\.js$/,
                parser: { system: true },
            }
        ]
    },
    plugins: [
        new WebpackShellPlugin({onBuildEnd: ['nodemon dist/server.js --watch build']})
    ]

}