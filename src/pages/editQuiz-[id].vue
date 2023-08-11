<script setup lang="ts">
import User from "~/types/User";
import Quiz from "~/types/Quiz";

useSeoMeta({
  title: "Edit Quiz",
});
const { getQuizById, updateQuiz } = useQuiz();
const quiz: Quiz = await getQuizById(useRoute().params?.id.toString());
const { getCurrentUser } = await useUser();
const user = (await getCurrentUser()) as unknown as User;

async function handleUpdateQuiz(updatedQuiz: Quiz) {
  quiz.name = updatedQuiz.name;
  quiz.description = updatedQuiz.description;
  quiz.category = updatedQuiz.category;
  quiz.questionList = updatedQuiz.questionList;

  await updateQuiz(quiz);
  await useRouter().push("/quizzes");
}
</script>

<template>
  <div>
    <section class="bg-sky-400 py-20">
      <div class="container mx-auto">
        <h1 class="text-center text-5xl font-bold text-gray-700">
          {{ $t("editQuiz.title") }}
        </h1>
        <QuizForm
          :quiz-data="quiz"
          @quizSubmitted="handleUpdateQuiz"
        ></QuizForm>
      </div>
    </section>
  </div>
</template>
