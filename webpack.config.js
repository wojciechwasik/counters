const path = require('path');

module.exports = {
    entry: './src/index.es6',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: { presets: ['es2015', 'react', 'stage-0'] }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: { presets: ['es2015', 'react', 'stage-0'] }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    target: 'web'
};
