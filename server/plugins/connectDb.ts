import { MongoClient } from "mongodb";

export default async () => {
  const url = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(url);
  try {
    await client.connect();
    return client;
  } catch (error) {
    console.log(error);
  }
};
