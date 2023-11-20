const path = require('path');

module.exports = (env) => {
	return {
		entry: './src/index.ts',
		output: {
			filename: 'danfebooks.pit.js',
			path: path.resolve(__dirname, env.outputPath),
			library: 'danfebooks',
			libraryTarget: 'umd',
			globalObject: 'this',
			umdNamedDefine: true,
		},
		module: {
			rules: [
				{
					test: /\.ts$/,
					exclude: /(node_modules)/,
					use: 'ts-loader',
				},
			],
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
	};
};
