import { MongoClient } from "mongodb";

export default async () => {
  const runtimeConfig = useRuntimeConfig();
  const client = new MongoClient(runtimeConfig.dbUrl);
  try {
    await client.connect();
    if (!client) return;

    return await client.db("quiz");
  } catch (error) {
    console.log(error);
  }
};
