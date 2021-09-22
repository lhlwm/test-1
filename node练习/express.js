var express =require('express');
var app = express()
app.all('/',function(req,res) {
    res.send('hello world')
})
app.all('/aa',function (req,res) {
    res.send('你好express')
})
// 可以访问公开的文件资源了
app.use('/public/',express.static('./public.'))

app.listen('3000',function () {
    console.log('服务器启动成功');
})
