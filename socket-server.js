var net = require('net');
var server = net.createServer(function(sock) { //'connection' listener
    console.log('server connected');

    sock.on('data', function(data) {
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
//        sock.write('You said "' + data + '"');

    });

    sock.on('end', function() {
//        console.log('client disconnected');
    });

    sock.on('close', function(data) {
//        console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
    });

//    sock.write('hello\r\n');
    sock.pipe(sock);
});

server.listen(8124, function() { //'listening' listener
    console.log('server start');
});