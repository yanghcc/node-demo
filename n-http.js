/*
* @Author: hucheng.yang
* @Date:   2017-03-26 23:05:55
* @Last Modified by:   hucheng.yang
* @Last Modified time: 2017-03-26 23:30:27
*/

var http = require('http')

//创建一个服务器。主要做三件事
//1.接收请求
//2.处理请求
//3.发送响应
var server = http.createServer();
server.on('request',function(request,response){
	console.log(request)
	console.log('get request')
	response.write('hello world')
	response.end()
})
//绑定一个端口，开启监听
server.listen(9999,function(){
	console.log('server is running in port 9999');
})
