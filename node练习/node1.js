var fs = require('fs');
var http = require('http');
var server = http.createServer();
server.on('request', function (request, response) {
    response.setHeader('Content-Type', 'text/plain;charset=utf-8');
    var url = request.url;
    if (url === '/index') {
        fs.readFile('./index.html', function (error, data) {
            if (error) {
                return response.end('读取失败');
            } else if (data) {
                // 服务器重定向跳转页面
                // response.statusCode = 302;
                // response.setHeader('Location', 'http://www.baidu.com');
                response.setHeader('Content-type', 'text/html;charset=utf-8');
                // response.write(data);
                response.end(data);
            } else if (url.indexOf('/public/') === 0) {
                fs.readFile('.' + url, function (err, data) {
                    if (err) {
                        return response.end('404 Not Found');
                    }
                    response.end(data)

                })

            }else {
                fs.readFile('./index', function (err, data) {
                    if (err) {
                        return response.end('404 Not Found');
                    }
                    response.end(data)

                })
            }
        })
    }
});
server.listen(5000, function () {
    console.log('服务器启动成功');
})
// server.all('/server',function() {

// })