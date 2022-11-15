const http = require('http');

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'application/json'});
   response.end({"message":"Hello World!","date":new Date());
}).listen(8080);

console.log('Server running at http://0.0.0.0:8080/');
