const mongodb = require("mongodb");
const { MongoClient } = mongodb;

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // tls: true,
  tlsCAFile: "./ca-certificate.crt",
});

module.exports = client;
