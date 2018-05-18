        entry: "./src/index.js",
        output: {
                path: path.resolve(__dirname, "public"),
                filename: "bundle.js",
                publicPath: "/"
        },

        module: {
                rules: [
                        { test:/\.(js)$/, exclude:/node_modules/, use: "babel-loader" },
                        { test:/\.css$/, use: ['style-loader', 'css-loader'] },
                        { test: /\.(png|svg|jpg|gif)$/, use: [ 'file-loader' ] },
                ]
        },

        devServer: {
                historyApiFallback: true
        },

        plugins: [ new HtmlWebpackPlugin({
                template: "./src/index.html"
        })]
}
