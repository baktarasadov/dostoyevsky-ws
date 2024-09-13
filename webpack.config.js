const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const isWatching = argv.watch || false; // Determine if watching is enabled

  return {
    target: "node",
    entry: "./src/server.js", // Change 'src/app.js' to your main server file
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "build.js",
    },
    resolve: {
      extensions: [".js", "*"],
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    externals: [nodeExternals()], // Excludes node_modules from the output bundle
    devtool: isProduction ? "source-map" : "inline-source-map", // Source maps configuration
    watch: isWatching,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-transform-runtime"],
            },
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(), // Cleans the dist folder on each build
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(
          isProduction ? "production" : "development",
        ),
      }),
    ],
    optimization: {
      minimize: isProduction, // Minimizes the bundle in production
    },
  };
};
