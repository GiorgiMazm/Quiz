import connectDb from "../../plugins/connectDb";

export default defineEventHandler(async () => {
  const db = await connectDb();
  if (!db) return;

  const usersCollection = await db.collection("users");
  const users = usersCollection.find();

  return users.toArray();
});
