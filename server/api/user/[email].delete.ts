import connectDb from "../../plugins/connectDb";

export default defineEventHandler(async (event) => {
  const client = await connectDb();

  if (!client) return;

  const db = await client.db("quiz");
  const usersCollection = await db.collection("users");
  const deletion = await usersCollection.deleteOne({
    email: event.context.params?.email,
  });

  if (deletion.deletedCount > 0) return "Success";

  return "Deletion failed";
});
