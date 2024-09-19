import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  db: {
    uri: process.env.DB_URI,
  },
};
