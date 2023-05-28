import Quiz from "~/types/Quiz";
import quizzes from "../data/quizzes.json";
import { plainToInstance } from "class-transformer";

export default () => {
  const quizList: Quiz[] = plainToInstance(Quiz, quizzes);
  function getQuizById(id: number) {
    return quizList.find((quiz) => quiz.id === id);
  }

  return { quizList, getQuizById };
};
