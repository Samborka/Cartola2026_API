const { MongoClient } = require("mongodb");
require("dotenv").config();

const MONGO_CNSTRING = process.env.MONGO_CNSTRING;

const dbName = "cartola2026";

async function connectDB() {
  try {
    const client = new MongoClient(MONGO_CNSTRING, {
      useNewUrlParser: true,
    });
    client.connect();

    const db = client.db(dbName);
    console.log("Conectado ao mongo");
    return db;
  } catch (error) {
    console.log("Erro Mongo: ", error);
  }
}

module.exports = { connectDB };
