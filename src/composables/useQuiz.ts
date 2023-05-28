import Quiz from "~/types/Quiz";
import { plainToInstance } from "class-transformer";

export default () => {
  async function getQuizById(id: number) {
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

  return { getQuizById };
};
