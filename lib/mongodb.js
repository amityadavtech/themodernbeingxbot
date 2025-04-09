import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable.");
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

// Reuse the existing client if available to avoid too many connections
if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
