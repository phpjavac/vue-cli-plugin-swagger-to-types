const axios = require("axios")
const fs = require("fs")
const { readFileSync } = require("fs");
const swaggerToTS = require("@manifoldco/swagger-to-ts").default;
module.exports = (api, projectOptions) => {
  api.registerCommand('getTypes', () => {
    if (!projectOptions.pluginOptions || !projectOptions.pluginOptions.toTypes) {
      console.log("未设置生成Types配置")
      return;
    }
    if (!projectOptions.pluginOptions.toTypes.host || !projectOptions.pluginOptions.toTypes.TypesPath) {
      console.log("未设置Types地址或输出路径")
      return;
    }

    const url = projectOptions.pluginOptions.toTypes.host

    axios.get(url).then(res => {
      // console.log(res.data);
      const input = res.data; // Input can be any JS object (OpenAPI format)
      const output = swaggerToTS(input); // Outputs TypeScript defs as a string (to be parsed, or written to a file)
      fs.writeFile(projectOptions.pluginOptions.toTypes.TypesPath, output, { encoding: 'utf8' }, err => {
        if (err) throw err;
        console.log('生成Types成功！');
      })
    })
  })
}
