var express=require('express');
var app=express();
app.render('html',require('express-art-template'))
// 更改路径
// app.set('views',默认路径)
app.get('/',function () {

})
app.post('/',function () {

})
app.listen('3000',function () {
    console.log('服务器启动成功');
})