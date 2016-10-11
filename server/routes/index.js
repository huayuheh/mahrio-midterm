'use strict';


module.exports = function( server ) {
    server.route({
        method: 'GET',
        path: '/{any*}',
        handler: function( req, rep ) {
            rep.view('index');
        }
    });
};
