const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://lexi:1P9ty3apejBm9xYj@stardust-zibzx.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true });

// Connection Events
mongoose.connection.on('connected', () => console.log('Mongoose connected to ' + dbURI));
mongoose.connection.on('error', (err) => console.log('Mongoose connection error ' + err));
mongoose.connection.on('disconnected', () => console.log('Mongoose disconnected'));

// App Termination / Restart Events
let gracefulShutdown = function(message, callback) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through ' + message);
    callback();
  });
}

// Nodemon Restart Event
process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', () => process.kill(process.pid, 'SIGUSR2'));
});

// App Termination Event
process.on('SIGINT', function () {
  gracefulShutdown('app termination', () => process.exit(0));
});

// Heroku App Termination Event
process.on('SIGTERM', function() {
  gracefulShutdown('Heroku app termination', () => process.exit(0));
});

// Bring in database models
require('./users');
