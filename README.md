# vue-cli-plugin-swagger-to-types
自动从swagger生成inteface

```JavaScript
// 1.安装插件
  vue add swagger-to-types

// 2.vue.config.js中设置配置
  pluginOptions: {
    toTypes: {
      host: "http://192.168.1.1/demo-web/v2/api-docs", // swagger地址
      TypesPath: "./types/api.d.ts" // 生成的interface
     }
  },

// 3.package.json中 添加生成types命令
  vue-cli-service getTypes

  ```
