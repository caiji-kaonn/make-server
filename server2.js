// 引入http模块
const http = require('http');
// 构建服务器对象
const server = http.createServer();
// 设置端口ip
server.listen(7070, '192.168.70.115', () => {
    console.log('服务器已启动，可通过http://192.168.70.115:7070 访问')
});
// 请求和回应
server.on('request', (req, res) => {
    console.log('啊啊啊，进来了');
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end('请滚吧')
})