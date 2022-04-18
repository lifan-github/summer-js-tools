#### 开发中常见的js方法
* 1、安装
```
    npm i summer-js-tools 或则 yarn add summer-js-tools
```
* 2、使用
```
 import { 
     sumColor,
     sumNum, 
     sumForm, 
     sumQuery, 
     getCookie, 
     setCookie, 
     removeCookie,
     sumCheck,
 } from "summer-js-tools";

 sumColor.randomColor(); // 随机一个颜色值 return string

 sumNum.randomNum(1, 100); // 生成指定范围的随机数

 sumForm.isChinaPhone("13288886666")；// 中国区手机号验证 return boolean

 sumForm.isChinaPhone("86-13288886666")；// 中国区手机号验证 return boolean

 sumForm.isEmail("1328886@163.com"); // 邮箱验证 return boolean

 // 获取URL中某个参数的值 return string;
 sumQuery.queryUrlStr('https://www.baidu.com?id=123&name=lily&age=18', 'name');

 // 获取URL中所有参数的集合 return object; {id: '123', name: 'lily', age: 18};
 sumQuery.queryUrlArgs('https://www.baidu.com?id=123&name=lily&age=18', 'name');

 // 分割金额整数位、小数位（使用场景：整数位的显示字号比小数位字号大）return {int: '100', dec: '.23'}
 sumQuery.splitPrice('899.3', 2); // arg1: 金额，arg2: 保留的小数位

 // cookie设置、获取、删除
 setCookie('name', 'value', 7); // 设置name:value, 有效期7天
 getCookie('name'); // 获取
 removeCookie('name');

 // 常见的计算后结果、有效值检测 null, undefined, '', NaN, 空格 
 sumCheck.checkValidValue(null); false
 sumCheck.checkValidValue(undefined); false
 sumCheck.checkValidValue(NaN); false

```