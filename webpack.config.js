const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.js', // Входной файл вашего приложения
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'), // Папка для выходных файлов
		publicPath: '/', // Для корректной работы роутинга
	},
	module: {
		rules: [
			{
				test: /\.js$/, // Для обработки JavaScript и JSX файлов
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/, // Для обработки CSS файлов
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/, // Для обработки шрифтов
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[hash].[ext]',
							outputPath: 'fonts/', // Папка для шрифтов в выходной директории
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
				test: /\.(mp4|webm|ogg)$/, // Для обработки видеофайлов
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[hash].[ext]',
							outputPath: 'videos/', // Папка для видеофайлов в выходной директории
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html', // Ваш HTML шаблон
		}),
		new CopyWebpackPlugin({
			patterns: [
				{from: 'src/styles', to: 'styles'},
				{from: 'src/images', to: 'images'}, // Копирование изображений в выходную директорию
				{from: 'src/videos', to: 'videos'}, // Копирование видеофайлов в выходную директорию
			],
		}),
	],
	devServer: {
		historyApiFallback: true, // Для корректной работы роутинга с React Router
		static: {
			directory: path.join(__dirname, 'src'), // Убедитесь, что сервер обслуживает статические файлы из правильной директории
		},
		open: true, // Автоматически открывать браузер
		client: {
			overlay: false
		},
	},
	mode: 'development', // Режим сборки

};