/* Author: YOUR NAME HERE
 */

$(document).ready(function () {
//
//  var socket = io.connect();
//
//  $('#sender').bind('click', function() {
//   socket.emit('message', 'Message Sent on ' + new Date());
//  });
//
//  socket.on('server_message', function(data){
//   $('#receiver').append('<li>' + data + '</li>');
//  });
    $('#control button').on('click', function (e) {
        var data = this.textContent;
        $.post("send", {'data':data}, function (data) {
            $('#message').text('Message ' + data.data + " has been sent");
        });
    })
});