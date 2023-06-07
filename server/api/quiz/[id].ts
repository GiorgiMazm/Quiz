// @ts-ignore
import Quiz from "../../../src/types/Quiz";
import { plainToInstance } from "class-transformer";
import connectDb from "../../plugins/connectDb";

export default defineEventHandler(async (event) => {
  const client = await connectDb();
  if (!client) return;

  const db = await client.db("quiz");
  const quizzesCollection = await db.collection("quizzes");
  const quizzes = await quizzesCollection.find().toArray();
  const quizzesList = plainToInstance(Quiz, quizzes);
  return quizzesList.find(
    (quiz) => quiz.id === parseInt(String(event.context.params?.id))
  );
});
