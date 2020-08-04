# vue-cli-plugin-swagger-to-types
自动从swagger生成inteface

```JavaScript
// 1.安装插件
  vue add swagger-to-types

// 2.vue.config.js中设置配置
  pluginOptions: {
    toTypes: {
      host: "http://192.168.1.1/demo-web/v2/api-docs", // ftp地址
      TypesPath: "./types/api.d.ts" // 项目地址
     }
  },

// 3.package.json中 build的命令修改为
  vue-cli-service build --no-clean && vue-cli-service getTypes

  ```
