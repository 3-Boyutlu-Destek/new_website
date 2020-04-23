var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx','.scss']
    },
    module: {
        rules: [
            { test: /\.jsx?$/, loader: 'babel-loader' },
            {
                test:/\.scss$/, 
                loader:[require.resolve('style-loader'), require.resolve('css-loader'), require.resolve('sass-loader')]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx','.scss'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        }
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}