var app = require('express')(),
    http = require('http').Server(app),
    io = require('socket.io')(http);
var config = require('./config.js');

io.on('connection', function (socket) {
    console.log('connected: ' + socket.client.conn.remoteAddress);
    socket.on(config.channel, function (msg) {
        console.log('message:' + msg);
        var obj=JSON.parse(msg);
        io.emit(obj.channel, msg);
    });
    socket.on('disconnect', function () {
        console.log(this.client.conn.remoteAddress + ' disconnected');
    });
});

http.listen(config.port,config.ip,function() {
    console.log('listening ' + config.channel + ' on ' + config.ip + '.' + config.port);
});