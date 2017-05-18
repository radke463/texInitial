var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/js/dist');
var APP_DIR = path.resolve(__dirname, 'src/js');

var config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module : {
		loaders : [
		  {
		    test : /\.jsx?/,
		    include : APP_DIR,
		    loader : 'babel-loader'
		  }
		],
        preLoaders : [
        	{
                test: /\.jsx?$/,
                loader: 'isparta',
                include: path.join(__dirname, 'src')
            }
		]
	},
	resolve: {
		root: [
			path.resolve('./src/js/resources')		
		]
	}

};

module.exports = config;