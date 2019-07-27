// 引入http模块
const http = require('http');
// 构建服务器对象
const server = http.createServer();
server.listen(9090, '192.168.70.115', () => {
    console.log('服务器已启动，可通过http://192.168.70.115:9090 访问');
});
server.on('request', (req, res) => {
    console.log('来了来了');
    res.setHeader('Content-Type', 'text/html', 'charset:utf-8');
    res.end('hahahahhhaah');
})