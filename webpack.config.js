/*global module, __dirname, process*/
/*eslint no-use-before-define:0 no-multi-spaces:0 */

var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var path = require('path');
var I18nPlugin = require('i18n-webpack-plugin');
var languages = {
	'en': null,
	'nl': require('./app/languages/nl.json')
};

// Support for extra commandline arguments
var argv = require('optimist')
						//--env=XXX: sets a global ENV variable (i.e. window.ENV='XXX')
						.alias('e','env').default('e','dev')
						//--minify:  minifies output
						.alias('nm','nomangle')
						.argv;

var config = {
	entry: {'bundle': './app/main'},
	output: {
		path: 'www',
		filename: '[name].js',
		publicPath: isDevServer() ? '/' : ''
	},
	devServer: {
		publicPath: '/'
	},
	reload: isDevServer() ? 'localhost' : null,
	module: {
		loaders: [
			{ test: /\.json$/,            loader: 'json-loader' },
			{ test: /\.css$/,             loader: 'style-loader!css-loader' },
			{ test: /\.less$/,            loader: 'style-loader!css-loader!less-loader' },
			{ test: /\.(png|jpg|gif)$/,   loader: 'url-loader?limit=5000&name=[path][name].[ext]&context=./app' },
			{ test: /\.(ico)$/,           loader: 'url-loader?limit=1&name=[path][name].[ext]&context=./app' },
			{ test: /\.eot$/,             loader: 'file-loader?name=[path][name].[ext]&context=./app' },
			{ test: /\.ttf$/,             loader: 'file-loader?name=[path][name].[ext]&context=./app' },
			{ test: /\.svg$/,             loader: 'file-loader?name=[path][name].[ext]&context=./app' },
			{ test: /\.woff$/,            loader: 'file-loader?name=[path][name].[ext]&context=./app' },
			{ test: /index\.html$/,       loader: 'file-loader?name=[path][name].[ext]&context=./app' }
		]
	},
	resolve: {
		root: path.join(__dirname, 'app'),
		alias: {
			'famous-flex': 'famous-flex/src'
		}
	},
	plugins: [
		new webpack.DefinePlugin({
			VERSION: JSON.stringify(require('./package.json').version),
			ENV: JSON.stringify(argv.env)
		}),
		new I18nPlugin(
			languages.en
		)
	]
};

if (argv.nomangle) {
	config.plugins.push(new webpack.optimize.UglifyJsPlugin({
		mangle: false
	}));
}

function isDevServer() {
	return process.argv.join('').indexOf('webpack-dev-server') > -1;
}

module.exports = config;
