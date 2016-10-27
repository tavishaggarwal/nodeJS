//1. Import Required Module
var http = require("http");

//2. create server
http.createServer(function(request,response){
response.end("hello world");
}).listen(8081);

//3. Testing and running the response
console.log('Server running at http://127.0.0.1:8081/');
