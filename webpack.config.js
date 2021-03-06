module.exports = {
	entry: "./src/index.ts",
	output: {
		filename: "./public/js/bundle.js",
	},
	devtool: "source-map",
	resolve: {
		extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
	},
	module: {
		loaders: [{
			test: /\.ts$/,
			loader: "ts-loader"
		}],
		preLoaders: [{
			test: /\.js$/,
			loader: "source-map-loader"
		}]
	},
	externals: {},
};
