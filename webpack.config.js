const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


module.exports = {

	devServer: {
		historyApiFallback: true
	},

	module: {
	  rules: [
		{
		  test: /\.scss$/,
		  use: ["style-loader", "css-loader", "sass-loader"]
		},
		{
		  test: /\.js$/,
		  exclude: /node_modules/,
		  use: ["babel-loader"]
		}
	  ]
	},
	plugins: [
	  new HtmlWebpackPlugin({
		template: path.resolve(__dirname, "client", "index.html")
	  })
	],
	optimization: {
		splitChunks: { chunks: "all" }
	},

	entry: {
		index: path.resolve(__dirname, "client", "index.js")
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		fileName: "bundle.js",
		publicPath: "/",
	},
}