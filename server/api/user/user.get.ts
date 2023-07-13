import connectDb from "../../plugins/connectDb";

export default defineEventHandler(async () => {
  const client = await connectDb();
  if (!client) return;

  const db = await client.db("quiz");
  const usersCollection = await db.collection("users");
  const users = usersCollection.find();

  return users.toArray();
});
