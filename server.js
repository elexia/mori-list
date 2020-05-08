const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

// Bring in config, db models
require('./server/models/db');
require('./server/config/passport');

// Bring in routes and start server
const routesApi = require('./server/routes/index');
const forceSSL = require('force-ssl-heroku');
const server = express();
server.use(forceSSL);
server.use(favicon(path.join(__dirname, '/dist/mori-list', 'favicon.ico')));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(cors());

// Initialize passport before using route middleware
server.use(passport.initialize());
server.use('/api', routesApi);

// Serve only static files from dist directory
server.use(express.static(__dirname + '/dist/mori-list'));

// Set application static layiout
server.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/mori-list/index.html'));
});

// Start the app by listening on the default Heroku port
server.listen(process.env.PORT || 4200);
