var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app/main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: path.join(__dirname, 'app'), loader: 'babel-loader'},
            {test: path.join(__dirname, 'app/style'), loader: "style-loader!css-loader"}
        ]
    },
    plugins: [
        // Avoid publishing files when compilation failed
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'

};
