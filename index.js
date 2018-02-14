var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    fs.readFile('./index.html',  function(err, data) {
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        if (request.method === 'GET' && request.url === '/') {
            response.write(data);
            response.end();
        } else {
            response.statusCode = 404;
            response.write('<img src="https://i.stack.imgur.com/WOlr3.png">');
            response.end();
        }
    });
});

server.listen(9000);