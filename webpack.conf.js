const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
        path: __dirname + '/public',
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080/'
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader'
		}]
	},
	devServer: {
		port: 8080,
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
