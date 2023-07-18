import connectDb from "../../plugins/connectDb";
import { ObjectId } from "bson";
import { PullOperator } from "mongodb";

export default defineEventHandler(async (event) => {
  const client = await connectDb();
  if (!client) return;
  const db = await client.db("quiz");
  const quizzes = await db.collection("quizzes");
  const users = await db.collection("users");
  const quizObjectIdToRemove = new ObjectId(event.context.params?.id);
  await users.updateMany(
    { quizzes: { $in: [quizObjectIdToRemove] } },
    { $pull: { quizzes: quizObjectIdToRemove } as PullOperator<Document> }
  );
  await quizzes.deleteOne({ _id: quizObjectIdToRemove });
  return "success";
});
