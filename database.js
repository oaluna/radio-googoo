// database.js
//Import Mongoose
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const env = process.env.NODE_ENV || 'development';
const databaseUrl = process.env.DATABASE_URL || `mongodb://localhost/quote-keeper_${env}`;
const options= {
  useMongoClient: true,
};

const connectAndDrop = async () => {
  await mongoose.connect(databaseUrl, options);
  await mongoose.connection.db.dropDatabase();
};

const disconnect = async () => {
  await mongoose.disconnect();
};

module.exports = {
  mongoose,
  databaseUrl,
  options,
  connectAndDrop,
  disconnect,
};
