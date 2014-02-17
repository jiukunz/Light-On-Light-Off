var net = require('net');
var client = net.connect({port: 8124},
    function () { //'connect' listener
        console.log('client connected');
//        client.write('world!\r\n');
    });

//client.on('data', function (data) {
//    console.log("I am writing " + data.toString());
//    client.end();
//});

client.on('end', function () {
    console.log('client disconnected');
});

function sendData(data){
    client.write(data);
}

exports.sendData = sendData;
exports.hello = function(){
    console.log('nihao');
}