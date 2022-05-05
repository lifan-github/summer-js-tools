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
    // 1、只能输入数字(排除小数点);
    value = value.replace(/[^\d.]/g, "");

    // 2、验证第一个字符是数字而不是.
    value = value.replace(/^\./g, "");

    // 2、若以0开头且连续键入多个0时，只保留一个0
    value = value.replace(/^0+$/g,"0");

    // 3、只保留第一个小数点(.)
    value = value.replace(/\.{2,}/g, ".");
    value = value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");

    // 4、精度最大位数
    let reg = new RegExp("^(\\-)*(\\d+)\\.(\\d{" + decimal + "}).*$");
    value = value.replace(reg, '$1$2.$3');

    return value;
}