/**
 * @author painter
 * @filename entry.js
 * @date 2022-05-12 Thursday
 * @description 入口配置
 * @description glob： node包 https://github.com/isaacs/node-glob#readme
 * @description 入口文件命名遵循 index.js index.html 的命名约定  entryName/index.html
 */
const Glob = require("glob").Glob;
const path = require("path");
const entryFolder = path.resolve(__dirname, "../", "entry");
const entryPages = new Glob("*", { cwd: entryFolder, sync: true }).found;

/** 根据入口数量构造配置对象 */
const configEntry = { vendors: ["react", "react-dom"] };
for (let i = 0; i < entryPages.length; i++) {
  const page = entryPages[i];
  const linkPath = path.resolve(entryFolder, `${page}/index.js`);
  const itemConfig = {
    import: linkPath,
    dependOn: ["vendors"],
    asyncChunks: true,
  };
  configEntry[page] = itemConfig;
}
module.exports = { configEntry, entryPages, entryFolder };
