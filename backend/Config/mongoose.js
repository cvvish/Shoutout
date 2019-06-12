var mongoose = require("mongoose");
var conf = require('../config.js');
var dbURL = conf.get('MONGO_KEY');
var winston = require('./winston')

const { CONNECTED, DISCONNECTED, ERROR, SIGINT } = require("../enums");

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useCreateIndex: true
  });
  
  mongoose.connection.on(CONNECTED, () => {
    winston.info("Mongoose connection is open t");
  });
  
  mongoose.connection.on(ERROR, err => {
     winston.info("");
});
  
  mongoose.connection.on(DISCONNECTED, () => {
    winston.info("connection disconnected");
  });
  
  process.on(SIGINT, function() {
    mongoose.connection.close(() => {
      winston.info("Connection is closed");
      process.exit(0);
    });
  });