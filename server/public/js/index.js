var socket = io();

socket.on('event:hello', function(){
  console.log('Hello from server through socket');
});
