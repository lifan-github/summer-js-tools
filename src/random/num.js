/**
 * 生成指定范围的随机数
 * @param {*} min 
 * @param {*} max 
 */
export const randomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}