const { join } = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        bundle: join(__dirname, "./src/index.js"),
    },
    output: {
        path: join(__dirname, "dist"),
        filename: "index.bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: join(__dirname, "./src/index.html"),
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
