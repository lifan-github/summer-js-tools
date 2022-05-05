function verifyNumberInput(value, decimal = 2) {
    // const bool = new RegExp("^\\d*(\\.\\d{0,"+decimal+"})?$").test(value);
    // return bool;

    // 1、清除非数字的字符(不包含小数点.)
    value = value.replace(/[^\d.]/g, "");

    // 2、只保留第一个. 清除多余的.
    value = value.replace(/\.{2,}/g, ".");
    value = value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");

    // 3、最大保留位数，位数不够不会自动补0
    // value = value.replace(/^(\-)*(\d+)\.(\d{1}).*$/, '$1$2.$3');
    let reg = new RegExp("^(\\-)*(\\d+)\\.(\\d{"+decimal+"}).*$");
    value = value.replace(reg, '$1$2.$3');

    // 4、排除0开头
    value = parseFloat(value).toString();

    return value;
}

console.log(verifyNumberInput("123.898977", 0));