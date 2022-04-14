/**
 * 暴露函数相关API
 */
/* export { randomColor } from "./random/color";
export { randomNum } from "./random/num"; */

/**
 * 自动检索当前目录下的所有js文件
 */
let moduleExports = {};
const r = require.context('./', true, /^\.\/.+\/.+\.js$/);
r.keys().forEach(key => {
    // 统一加个别名
    let attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
    moduleExports[attr] = r(key);
});
module.exports = moduleExports;