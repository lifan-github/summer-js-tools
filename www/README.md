#### npm 工具JS库上传流程
* 1、src文件夹中开发工具
* 2、src/index中暴露出所有的方法
* 3、打包 yarn build
* 4、www/demo.html 可以在浏览器测试
* 5、发布至npm: 
```
    (1) 登录npm login
    (2)发布npm publish
    // 身份验证器code码 每次更新需要修改版本号
```
* 应用
```
 import { randomColor } from "summer-js-tools";
```