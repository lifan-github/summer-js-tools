let setCookie = require('./setCookie');
/**
 * 根据name删除cookie
 * @param {*} name 
 */
export const removeCookie = (name) => {
    // 设置已过期，系统会立刻删除cookie
    setCookie(name, '1', -1);
}