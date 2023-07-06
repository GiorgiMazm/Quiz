import connectDb from "../../plugins/connectDb";

export default defineEventHandler(async (event) => {
  const client = await connectDb();

  if (!client) return;

  const db = await client.db("quiz");
  const usersCollection = await db.collection("users");
  const users = await usersCollection.find().toArray();
  return (
    users.find((user) => user.email === event.context.params?.email) ||
    "Not found"
  );
});
