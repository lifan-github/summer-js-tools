
/**
 * 检测某个值是否为有效值
 * @param {*} value 
 * @return boolean
 */
export const checkValidValue = (value) => {
    const arr = [null, 'null', undefined, 'undefined', '', ' ', NaN, 'NaN'];
    if(arr.includes(value)){
        return false;
    }
    return true;
}