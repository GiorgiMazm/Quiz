import Quiz from "~/types/Quiz";
import { plainToInstance } from "class-transformer";

export default () => {
  async function getQuizById(id: string) {
    const { error, data } = await useFetch(`/api/quiz/${id}`);
    if (error.value) {
      throw createError({
        statusCode: 404,
        statusMessage:
          "Something went wrong with fetching data, try again later",
      });
    }
    return plainToInstance(Quiz, data.value);
  }
  async function getQuizzes() {
    const { error, data } = await useFetch("/api/quizzes");
    if (error.value) {
      throw createError({
        statusCode: 404,
        statusMessage:
          "Something went wrong with fetching data, try again later",
      });
    }
    return plainToInstance(Quiz, data.value as unknown as Quiz[]);
  }

  async function deleteQuiz(id: any) {
    if (!id) return;
    const { error } = await useFetch(`/api/quiz/${id}`, {
      method: "DELETE",
    });
    if (error.value) {
      throw createError({
        statusCode: 404,
        statusMessage:
          "Something went wrong with deleting this quiz, try again later",
      });
    }
  }

  return { getQuizById, getQuizzes, deleteQuiz };
};
