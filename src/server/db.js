const mongoose = require('mongoose');
const config = require('./config/index.js');

const uri = config.db.uri;

const connectDB = () => {
  return mongoose
    .connect(uri)
    .then(() => {
      console.log('MongoDB connected successfully!');
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err);
      process.exit(1);
    });
};

module.exports = connectDB;
