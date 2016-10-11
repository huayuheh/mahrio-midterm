var gpio = require('onoff').Gpio,
  motion = new gpio(21, 'in', 'both'),
  io = null;

motion.watch( function(err, val) {
  if( err ) { console.log('Motion in 21 Error'); return; }

  console.log('Motion in 21 is ' +(val ? 'ACTIVE' : 'INACTIVE') + ' : ' + new Date().toLocaleString() );
  if( io ) {
    io.sockets.emit('event:motion', val);
  }

});

process.on('SIGINT', function(){
  motion.unexport();
  process.exit();
});

module.exports = function( ioInstance ) {
  io = ioInstance;
}
