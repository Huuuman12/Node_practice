var http = require('http');
var date = require('./myfirstmodule');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write("The date and time are currently: " + date.myDateTime());
  response.write('Hi');
  response.end('Hello world');
}).listen(8080);
