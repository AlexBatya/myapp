const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/preload/preload.ts',
  target: 'electron-preload',
  module: {
		rules: [
			{
				test: /\.ts$/,
				include: /src/,
				use: 'ts-loader',
			},
		],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'preload.js',
  },
};

