
// 数组对象中找出某个对象
/**
 * 获取数组中某个对象
 * @param {*} arr 数组源
 * @param {*} name 查找的键值名
 * @param {*} value 键值
 */
export const filterArr = (arr, name, value) => {
    if(!Array.isArray(arr) || arr.length === 0 || !name || !value) {
        return null;
    }
    let new_arr = arr.filter(item => {
        return item[name] === value;
    });
    return new_arr[0];
}

/* const arr = [
    {name: 'lifan', age: 18},
    {name: 'lily', age: 20},
    {name: 'lucy', age: 30},
];

console.log(filterArr(arr, 'name', 'lily'));
{ name: 'lily', age: 20 } */