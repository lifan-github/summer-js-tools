
/**
 * 设置cookie
 * @param {*} name cookie名称
 * @param {*} value cookie值
 * @param {*} days 有效天数
 */
export const setCookie = (name, value, days) => {
    let date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = name + '=' + value + ';expires=' + date;
}