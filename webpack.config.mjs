import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
		modules: ['node_modules'],
		alias: {
			handlebars: 'handlebars/dist/handlebars.js',
			'@app': path.resolve(__dirname, 'src/'),
			'@dist': path.resolve(__dirname, 'dist/'),
			'@test': path.resolve(__dirname, 'test/'),
		},
	},
	target: 'node',
	output: {
		filename: 'index.cjs',
		path: path.resolve(__dirname, 'dist'),
	},
};
