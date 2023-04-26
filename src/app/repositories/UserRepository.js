const { connectDB } = require("../../database");
const { ObjectId } = require("mongodb");

class UserRepository {
  async findAll(collectionName) {
    const db = await connectDB();
    const collection = db.collection(collectionName);

    try {
      const users = await collection.find({}).toArray();

      return users;
    } catch {}
  }

  async create(collectionName, user) {
    const db = await connectDB();
    const collection = db.collection(collectionName);

    try {
      const result = await collection.insertOne(user);

      return result.ops[0]; //Retorna o documento inserido
    } catch {}
  }

  async update(id, collectionName, user) {
    const { name, team, score } = user;

    try {
      const db = await connectDB();
      const collection = db.collection(collectionName);

      const filter = { _id: new ObjectId(id) };

      const updateDocument = {
        $set: {
          score: score,
        },
      };

      const result = await collection.updateOne(filter, updateDocument);

      return result.modifiedCount;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UserRepository();
