// 构建请求服务器 const 变量名 =require('变量名')
const http = require('http');
// 构建服务器对象
const server = http.createServer();
// 靠ip和端口找服务器
server.listen(8080, '127.0.0.1', () => {
    console.log('server start 可通过 http://127.0.0.1:8080 访问');
})
// 给服务器发送请求和回应
server.on('request', (req, res) => {
    console.log('请求进来了哟');
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end('张丝莹是个傻佬哈哈哈哈哈哈');
})