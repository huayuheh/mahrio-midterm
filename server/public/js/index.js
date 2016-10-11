var socket = io();

socket.on('event:hello', function(){
  console.log('Hello from server through socket');
});

socket.on('event:motion', function( val ) {
  console.log('Motion in 21 is ' +(val ? 'ACTIVE' : 'INACTIVE'));
});
