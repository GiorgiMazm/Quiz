import Quiz from "~/types/Quiz";
import { plainToInstance } from "class-transformer";

export default async () => {
  const { error, data } = await useFetch("/api/quizzes");
  if (error.value) {
    throw createError({
      statusCode: 404,
      statusMessage: "Something went wrong with fetching data, try again later",
    });
  }
  const quizList: Quiz[] = plainToInstance(Quiz, data.value as Quiz[]);

  return { quizList };
};
