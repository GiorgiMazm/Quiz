import connectDb from "../../plugins/connectDb";
import { ObjectId } from "bson";

export default defineEventHandler(async (event) => {
  const client = await connectDb();
  if (!client) return;
  const db = await client.db("quiz");
  const quizzes = await db.collection("quizzes");
  await quizzes.deleteOne({ _id: new ObjectId(event.context.params?.id) });
  return "success";
});
