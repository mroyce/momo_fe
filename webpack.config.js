var webpack = require('webpack');
var path = require('path');


var BUILD_DIR = __dirname;
var NODE_MODULES = path.resolve(__dirname, 'node_modules/');
var SRC_DIR = path.resolve(__dirname, 'src/');
var SCRIPTS_DIR = path.resolve(SRC_DIR, 'scripts/');
var STYLES_DIR = path.resolve(SRC_DIR, 'styles/');


var config = {
    entry: SRC_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: [SRC_DIR],
                exclude: NODE_MODULES,
                loaders: ['babel'],
            },
            {
                test: /\.less$/,
                include: [STYLES_DIR, NODE_MODULES],
                loaders: ['style', 'css', 'less'],
            },
        ]
    },
    resolve: {
        moduleDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx'],
        alias: {
            lib: NODE_MODULES,
            src: SRC_DIR,
            styles: path.resolve(SRC_DIR, 'styles/'),
            components: path.resolve(SCRIPTS_DIR, 'components/'),
            actions: path.resolve(SCRIPTS_DIR, 'actions/'),
            reducers: path.resolve(SCRIPTS_DIR, 'reducers/'),
            constants: path.resolve(SCRIPTS_DIR, 'constants/'),
        },
    },
};


module.exports = config;
