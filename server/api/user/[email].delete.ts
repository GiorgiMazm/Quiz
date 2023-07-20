import connectDb from "../../plugins/connectDb";

export default defineEventHandler(async (event) => {
  const db = await connectDb();
  if (!db) return;

  const usersCollection = await db.collection("users");
  const deletion = await usersCollection.deleteOne({
    email: event.context.params?.email,
  });

  if (deletion.deletedCount > 0) return "Success";

  return "Deletion failed";
});
