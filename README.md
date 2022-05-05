### 开发中常见的js方法

#### 一、安装方式
```
    yarn add summer-js-tools 或则  npm i summer-js-tools
```

#### 二、使用教程
  * 随机颜色值、随机值
```
import { 
     sumColor,
     sumNum, 
 } from "summer-js-tools";

 sumColor.randomColor();   // 随机一个颜色值 return string
 sumNum.randomNum(1, 100); // 生成指定范围的随机数

```

  * 中国区手机号验证、邮箱验证
```
import { sumForm } from "summer-js-tools";

sumForm.isChinaPhone("13288886666")；   // return true
sumForm.isChinaPhone("86-13288886666")；// return true

sumForm.isEmail("1328886@163.com");  // return true

```

  * URL规则的有效性验证、输入框inupt的值监听
```
import { sumForm } from "summer-js-tools";

sumForm.isUrl(str);   // return true || false

// 输入框值：1、只能数字 2、只能输入一个小数点 3、不能0开头 4、不能输入非数字字符 5、默认保留2位
sumForm.verifyNumberInput("123.898977", 3); // 123.898
sumForm.verifyNumberInput(".9889.76", 1);   // 0.9
sumForm.verifyNumberInput(".9889.76", 1);   // 0.9
sumForm.verifyNumberInput('00989.8976');    // 989.89
sumForm.verifyNumberInput('989..89.76');    // 989.89

```

  * 获取URL中某个参数的值 || 获取URL中所有参数的集合
```
import { sumQuery } from "summer-js-tools";

sumQuery.queryUrlStr('https://www.baidu.com?id=123&name=lily&age=18', 'name'); 
// lily

sumQuery.queryUrlArgs('https://www.baidu.com?id=123&name=lily&age=18'); 
// {id: '123', name: 'lily', age: 18}

```

  * 分割金额整数位、小数位（使用场景：整数位的显示字号比小数位字号大）
```
import { sumQuery } from "summer-js-tools";

// 参数一: 金额, 参数二: 保留的小数位
sumQuery.splitPrice('899.3', 2); // {int: '100', dec: '.23'}

```

  * cookie设置、获取、删除
```
 import { 
     getCookie, 
     setCookie, 
     removeCookie,
 } from "summer-js-tools";

 setCookie('name', 'value', 7); // 设置name:value, 有效期7天
 getCookie('name');             // 获取
 removeCookie('name');          // 删除

```

  * 常见的计算后结果、有效值检测 null, undefined, '', NaN, 空格 
```
 import { sumCheck } from "summer-js-tools";

 sumCheck.checkValidValue(null);      // false
 sumCheck.checkValidValue(undefined); // false
 sumCheck.checkValidValue(NaN);       // false

```