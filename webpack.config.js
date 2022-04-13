const path = require("path");

module.exports = {
    // 入口文件
    entry: './src/index.js',
    // 出口文件
    output: {
        // 打包至dist文件夹中
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件名
        filename: 'summerTools.js',
        // 设置对外暴露对象的全局名称
        library: "summerTools",
        // *注意* 打包生成通过esm(import)、commonjs(require)、requirejs的语法引入
        libraryTarget: "umd",
    }
};