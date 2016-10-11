'use strict';

// Load environment variables defined in .env into process.env
process.env = require('node-env-file')('.env');

// Apply configurations (minimum ip & port) to server and start
const CONFIG= require('./config/env')( process.env )
    , SERVER = require('./config/hapi')( CONFIG );

// Load accessible url routes. Minimum root HTML page
require('./routes/index')( SERVER );

require('./config/sockets')( SERVER );

module.exports = SERVER;
