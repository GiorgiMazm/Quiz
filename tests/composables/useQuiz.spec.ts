import useQuiz from "~/composables/useQuiz";
import { describe, test } from "vitest";

describe("My test", async () => {
  test.skip("my test", async () => {
    const quiz = await useQuiz().getQuizById("");
    console.log(quiz);
  });
});
