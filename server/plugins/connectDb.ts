import { MongoClient } from "mongodb";

export default async () => {
  const runtimeConfig = useRuntimeConfig();
  const client = new MongoClient(runtimeConfig.dbUrl);
  try {
    await client.connect();
    return client;
  } catch (error) {
    console.log(error);
  }
};
