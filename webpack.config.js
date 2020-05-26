const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.scss','.css'],
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        loader: [require.resolve('style-loader'), require.resolve('css-loader'), require.resolve('sass-loader')],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin([{ from: 'public' }]),
  ],
  devServer: {
    historyApiFallback: true,
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: 'https://3boyutludestek.ege.dev',
    }),
  },
};
