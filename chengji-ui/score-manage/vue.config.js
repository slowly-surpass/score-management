module.exports = {
  devServer: {
    port: 8080, // 端口号，如果端口号被占用，会自动提升1
    host: "localhost", //主机名， 127.0.0.1， 真机 0.0.0.0
    https: false, //协议
    open: true, //启动服务时自动打开浏览器访问
    proxy: {  // 开发环境代理配置
        '/api': {  // 意思是当请求是以 dev-api 开头的请求，都走代理
            // 目标服务器地址，代理访问：http://localhost:8001
            target: 'http://8.131.98.159:3000',
            changeOrigin: true,   // 开启代理服务器，就会给你代理转发
            pathRewrite: {
            // /dev-api/db.json 最终会转发到 http://localhost:8001/db.json
            '^/api': '/api',  // 就是将请求地址中的 /api 前缀替换成空的
            }
        }
    }

},
}
