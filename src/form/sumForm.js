/**
 * 常见的表单验证
 */

/**
 * 中国区手机号验证
 * @param {*} str 
 *  "8613266668888"
 *  || "08613266668888" 
 *  || "086-13266668888" 
 *  || "86-13266668888"
 *  || "13266668888"
 *  || "+086-13266668888"
 * @return {Boolean} 
 */
export const isChinaPhone = (str) => {
    return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(str);
}

/**
 * @desc   判断是否为邮箱地址
 * @param  {String}  str
 * @return {Boolean} 
 */
export const isEmail = (str) => {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}

/**
 * @desc  判断是否为身份证号
 * @param  {String|Number} str 
 * @return {Boolean}
 */
export const isIdCard = (str) => {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
}

/**
 * 判断URL是否为有效的链接
 * @param {*} url 
 * @return {Boolean}
 */
export const isUrl = (url) => {
    return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(url);
}

/**
 * 数字输入框验证：
 * 1、数字开头（排除0）
 * 2、只能存在一个小数点
 * 3、最多保留位数
 * 4、不满足使用''替换，不能继续输入
 * @param {String} value  输入值
 * @param {Number} decimal 最多保留位数(默认2位)
 * @return 返回值
 */
export const verifyNumberInput = (value, decimal = 2)  => {
    // 1、清除非数字的字符(不包含小数点.)
    value = value.replace(/[^\d.]/g, "");

    // 2、只保留第一个. 清除多余的.
    value = value.replace(/\.{2,}/g, ".");
    value = value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");

    // 3、只能输入两个小数(动态值)              // 保留位数
    // value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
    let reg = new RegExp("^(\\-)*(\\d+)\\.(\\d{"+decimal+"}).*$");
    value = value.replace(reg, '$1$2.$3');

    // 4、排除0开头
    value = parseFloat(value).toString();

    return value;
}