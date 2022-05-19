const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
module.exports = {
  devtool: "source-map",
  entry: {
    accountForm: "./src/code/account/accountForm.ts"
  },
  output: {
    filename: "[name]/[name].js",
    sourceMapFilename: "[name]/[name].js.map",
    path: path.resolve(__dirname, "../dist"),
    library: ["PowerApps"],
    libraryTarget: "var",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESLintPlugin({
      fix: true,
      extensions: ["ts", "tsx"],
      lintDirtyModulesOnly: true,
      failOnError: true,
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
};