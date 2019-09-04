import { MongoClient } from "mongodb";

const URL = "mongodb://mongo:27017/chatapp?authSource=admin";

export default class Database {
  connect() {
    // eslint-disable-next-line no-undef
    return new Promise((resolve, reject) => {
      MongoClient.connect(URL, (err, db) => {
        return err ? reject(err) : resolve(db);
      });
    });
  }
}
