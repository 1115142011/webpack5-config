/**
 * @author painter
 * @filename devserver.config.js
 * @date 2022-05-13 Friday
 * @description 开发服务配置
 */
module.exports = {
  host: "local-ip",
  compress: true, //为每个静态文件开启 gzip compression
  liveReload: false,
  open: true,
  hot: true,
  static: {
    serveIndex: true,
  },
  proxy: [
    {
      context: ["/risk_web", "/common", "/website"], //监管
      target: "http://10.168.1.101:6510",
      pathRewrite: {},
      changeOrigin: true,
    },
    {
      context: ["/supervise", "/rbac"], // 中台
      target: "http://10.168.1.101:6010",
      pathRewrite: {},
      changeOrigin: true,
    },
  ],
};
