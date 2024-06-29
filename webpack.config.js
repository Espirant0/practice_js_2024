const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[hash].[ext]',
							outputPath: 'fonts/',
						},
					},
				],
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[hash].[ext]',
							outputPath: 'images/',
						},
					},
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 65,
							},
							optipng: {
								enabled: true,
							},
							pngquant: {
								quality: [0.65, 0.90],
								speed: 4,
							},
							gifsicle: {
								interlaced: false,
							},
							webp: {
								quality: 75,
							},
						},
					},
				],
			},
			{
				test: /\.(mp4|webm|ogg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[hash].[ext]',
							outputPath: 'videos/',
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/app/index.html',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{from: 'src/styles', to: 'styles'},
				{from: 'src/assets/images', to: 'images'},
				{from: 'src/assets/videos', to: 'videos'},
			],
		}),
	],
	devServer: {
		historyApiFallback: true,
		static: {
			directory: path.join(__dirname, 'src/assets'),
		},
		open: true,
		client: {
			overlay: false
		},
	},
	mode: 'development',

};