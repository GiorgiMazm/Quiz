import connectDb from "../plugins/connectDb";
import { ObjectId } from "bson";

export default defineEventHandler(async (event) => {
  const db = await connectDb();
  if (!db) return;

  const quizzes = await db.collection("quizzes");
  const users = await db.collection("users");
  const body = await readBody(event);
  validateQuiz(body.quiz);

  const { insertedId } = await quizzes.insertOne(body.quiz);
  await users.updateOne(
    { _id: new ObjectId(body.user._id) },
    { $push: { quizzes: insertedId } }
  );
  return "success";
});
