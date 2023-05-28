// @ts-ignore
import quizzes from "~/data/quizzes.json";
import Quiz from "../../../src/types/Quiz";
import { plainToInstance } from "class-transformer";

export default defineEventHandler((event) => {
  const quizzesList = plainToInstance(Quiz, quizzes);
  return quizzesList.find(
    (quiz) => quiz.id === parseInt(String(event.context.params?.id))
  );
});
