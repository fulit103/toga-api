const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config');
const mongoose = require('mongoose');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoConnect {
  constructor() {
    console.log(MONGO_URI);

    mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
    this.db = mongoose.connection;
    this.db.on('error', console.error.bind(console, 'connection error:'));
    this.db.once('open', function() {
      // we're connected!
      console.log('Connected succesfully to mongo');
    });
  };
}

module.exports = MongoConnect;
