/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-13 01:32:23
 * @LastEditors: your name
 * @Description:
 */

const px2rem = require("postcss-px2rem");
module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [px2rem({ remUnit: 37.5 })],
            },
        },
    },
    devServer: {
        port: 8080,
        proxy: {
            '/api': {
                // 当请求地址以 api 开头时，代理到另一个地址
                // target: 'https://mallapi.duyiedu.com', // 代理的目标地址
                target: 'https://www.baidu.com', // 代理的目标地址
                changeOrigin: true, // 更改请求头中的host，无须深究，为避免出问题，最好写上
                // secure: false,
                pathRewrite: {
                    '^/api': '456'
                }
            },
        },
    },
};
