const mongoose = require('mongoose');

const uri =
  'mongodb+srv://JobApplicationUser:hgrW3WGcjZan9vhm@cluster1.umbgx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1';

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
