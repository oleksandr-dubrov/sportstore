const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = (_, { mode }) => ({
  mode,
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/',
  },
  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['.js', '.jsx', '.json'],
    plugins: [new DirectoryNamedWebpackPlugin(true)],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'SMS Balance',
      inject: true,
      favicon: './src/favicon.png',
      template: './src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|otf|svg|ttf|woff|png)$/,
        use: {
          loader: 'file-loader',
          options: { name: 'assets/[name][hash].[ext]' },
        },
      },
    ],
  },
  devtool: mode === 'production' ? false : 'cheap-module-source-map',
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  devServer: {
    contentBase: false,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
  },
});
