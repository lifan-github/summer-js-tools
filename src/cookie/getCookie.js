
/**
 * 获取cookie
 * @param {string} name 
 * @return {string}
 */
export const getCookie = (name) => {
    const arr = document.cookie.replace(/\s/g, "").split(';');
    for (let i = 0; i < arr.length; i++) {
        let tempArr = arr[i].split('=');
        if (tempArr[0] == name) {
            return decodeURIComponent(tempArr[1]);
        }
    }
    return '';
}