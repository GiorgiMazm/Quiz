<script setup lang="ts">
import User from "~/types/User";
import Quiz from "~/types/Quiz";

useSeoMeta({
  title: "New Quiz",
});
const { getCurrentUser } = await useUser();
const { createQuiz } = useQuiz();
const user = (await getCurrentUser()) as unknown as User;

async function handleCreateQuiz(quiz: Quiz) {
  await createQuiz({
    user: user,
    quiz: quiz,
  });
  await useRouter().push("/quizzes");
}
</script>

<template>
  <div>
    <section class="bg-sky-400 py-20">
      <div class="container mx-auto">
        <h1 class="text-center text-5xl font-bold text-gray-700">
          {{ $t("newQuiz.title") }}
        </h1>
        <QuizForm @quizSubmitted="handleCreateQuiz"></QuizForm>
      </div>
    </section>
  </div>
</template>
