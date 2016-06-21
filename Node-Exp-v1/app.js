/**
 * 
 */

var http = require('http');
var connect  = require('connect');
var fs = require('fs');

var app = connect();


var io = require('socket.io').listen(http);

io.sockets.on('connection', function(socket) {
    socket.on('message_to_server', function(data) {
        io.sockets.emit("message_to_client",{ message: data["message"] });
    });
});

var app = http.createServer(function (request, response) {
    fs.readFile("MainApp.html", 'utf-8', function (error, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    });
}).listen(8080);
