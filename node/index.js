var PORT = 9002;
var http = require('http');
var url = require('url');
var server = http.createServer(function(request, response) {
	var pathname = url.parse(request.url).pathname;
	response.write(pathname);
	response.end();
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");