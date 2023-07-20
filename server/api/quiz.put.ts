import connectDb from "../plugins/connectDb";
import Quiz from "../../src/types/Quiz";
import { ObjectId } from "bson";
import { plainToInstance } from "class-transformer";

export default defineEventHandler(async (event) => {
  const db = await connectDb();
  if (!db) return;

  const quizzes = await db.collection("quizzes");
  const newQuiz: Quiz = plainToInstance(Quiz, (await readBody(event)) as Quiz);
  console.log(newQuiz);

  validateQuiz(newQuiz);
  await quizzes.updateOne(
    { _id: new ObjectId(newQuiz.id) },
    {
      $set: {
        name: newQuiz.name,
        description: newQuiz.description,
        questionList: newQuiz.questionList,
        category: newQuiz.category,
      },
    }
  );
  return "success";
});
