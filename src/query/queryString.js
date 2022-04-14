
// let url = "https://www.baidu.com?id=123&name=lily&age=18";
/**
 * 查询URL中单个参数名对应的参数值
 * @param {*} name 需要的参数名
 * @param {*} url 需要解析的URL
 * @param return str || null(未找到)
 */
export const queryUrlStr = (url, name) => {
    if(!url || !name) return null;
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    let regexS = "[\\?&]" + name + "=([^&#]*)";
    let regex = new RegExp(regexS);
    let results = regex.exec(url);
    return results == null ? null : results[1];
}

/**
 * 获取URL中所有的参数值
 * @param {*} url 
 * @param {*} return obj {name: 'lily', id: '123'}
 */
export const queryUrlArgs = (queryUrl) => {
    if(!queryUrl) return {};
    // 裁掉?前面的
    const idx = queryUrl.indexOf("?");
    const url = queryUrl.slice(idx+1);
    const args = {};
    const pairs = url.split("&");
    for(let i=0; i<pairs.length; i++){
        let pos = pairs[i].indexOf("=");
        if(pos === -1) continue;
        let name = pairs[i].substring(0, pos);
        let value = pairs[i].substring(pos+1);
        value = decodeURIComponent(value);
        args[name] = value;
    }
    return args;
}

/**
 * 金钱裁剪
 * 使用场景：￥898.00 （￥898字号要大些）(.00为保留的小位数字号小点并保留需要的位数)
 * @param {*} price 
 * @param {*} fixedNum 必须大于0
 * return { int: 整数位,  dec: 小数位}
 */
export const splitPrice = (price = 0, fixedNum = 2) => {
    const str = Number(price).toFixed(fixedNum);
    const arr = str.split(".");
    const res = {
        int: arr[0],
        dec: '.' + arr[1],
    };
    return res;
}