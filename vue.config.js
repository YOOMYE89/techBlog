
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const path = require('path');
const webpack = require('webpack')
const { merge } = require('webpack-merge')

const isProduction = process.env.NODE_ENV === 'PRODUCTION'

const common = {
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src/'),
            '~': path.join(__dirname, 'node_modules/')
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            IS_PRODUCTION: isProduction
        })
    ]
}

module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // todo
        } else {
            return merge(common, {
                resolve: {
                    alias: {
                    }
                },
                mode: 'development',
                devServer: {
                    // 기본 브라우저 자동 오픈
                    open: true,
                    // 에러 났을 때 브라우저 화면에 바로 나타남
                    overlay: true,
                    // 개발 서버 포트
                    port: 8080
                },

                plugins: [
                ]
            })
        }
    }
}