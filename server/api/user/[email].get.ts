import connectDb from "../../plugins/connectDb";

export default defineEventHandler(async (event) => {
  const db = await connectDb();
  if (!db) return;

  const usersCollection = await db.collection("users");
  const users = await usersCollection.find().toArray();
  return users.find((user) => user.email === event.context.params?.email) || "";
});
