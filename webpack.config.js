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
	externals: {
		'react/lib/ExecutionEnvironment': true,
		'react/addons': true,
		'react/lib/ReactContext': 'window'
	},
	module : {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{test: /\.css$/, loader: "style-loader!css-loader"},
			{test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
			{test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"},
			{test: /\.gif$/, loader: "url-loader?mimetype=image/png"},
			{test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: "url-loader?mimetype=application/font-woff"},
			{test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, loader: "file-loader?name=[name].[ext]"}
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
		resolve: {
			extensions: ['', '.js', '.jsx', '.json', '.css']
		},
		root: [
			path.resolve('./src/js/resources')		
		]
	}

};

module.exports = config;