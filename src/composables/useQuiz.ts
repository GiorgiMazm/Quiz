import Quiz from "~/types/Quiz";
import { plainToInstance } from "class-transformer";
import { QuizCategory } from "~/types/QuizCategory";
import User from "~/types/User";

export default () => {
  const url = "/api/quiz";
  async function getQuizById(id: string) {
    const { error, data } = await useFetch(`${url}/${id}`);
    if (error.value) {
      throw createError({
        statusCode: 404,
        statusMessage:
          "Something went wrong with fetching data, try again later",
      });
    }
    return plainToInstance(Quiz, data.value);
  }
  async function getQuizzes(filter: QuizCategory) {
    const { error, data } = await useFetch(url, {
      params: { filter: filter },
    });
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
    const { error } = await useFetch(`${url}/${id}`, {
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

  async function createQuiz(neqQuiz: { user: User; quiz: Quiz }) {
    const { error } = await useFetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(neqQuiz),
    });
    if (error.value) {
      throw createError({
        statusCode: 404,
        statusMessage:
          "Something went wrong with fetching data, try again later",
      });
    }
  }

  async function updateQuiz(quiz: Quiz) {
    const { error } = await useFetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quiz),
    });
    if (error.value) {
      throw createError({
        statusCode: 404,
        statusMessage:
          "Something went wrong with fetching data, try again later",
      });
    }
  }

  return { getQuizById, getQuizzes, deleteQuiz, createQuiz, updateQuiz };
};
