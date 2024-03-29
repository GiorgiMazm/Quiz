// @ts-ignore
import Quiz from "../../../src/types/Quiz";
import connectDb from "../../plugins/connectDb";
import { ObjectId } from "bson";

export default defineEventHandler(async (event) => {
  const db = await connectDb();
  if (!db) return;

  const quizzesCollection = await db.collection("quizzes");
  const quizzes = await quizzesCollection.find().toArray();
  const quizzesList = quizzes.map((quiz) => {
    return new Quiz(
      quiz.name,
      quiz.questionList,
      quiz.description,
      quiz._id,
      quiz.category
    );
  });
  return (
    quizzesList.find((quiz) =>
      quiz.id.equals(new ObjectId(event.context.params?.id))
    ) || "Not found"
  );
});
