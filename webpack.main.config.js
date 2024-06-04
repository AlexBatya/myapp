
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main/main.ts',
  target: 'electron-main',
  module: {
		rules: [
			{
				test: /\.ts$/,
				include: /src/,
				use: 'ts-loader',
			},
			{
				test: /\.(png|ico)$/, // Регулярное выражение для иконок
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]', // Сохранить оригинальное имя файла и расширение
							outputPath: '/', // Директория, куда будут помещены иконки
						},
					},
				],
			},
		],
  },
  resolve: {
		extensions: ['.ts', '.js'],
  },
  output: {
		filename: 'main.js',
  },
};

