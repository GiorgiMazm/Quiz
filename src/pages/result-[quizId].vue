<script setup lang="ts">
useSeoMeta({
  title: "Quiz results",
});
const route = useRoute();
const { getQuizById } = useQuiz();
const quiz = await getQuizById(String(route.params.quizId));
if (
  route.query.correct === null ||
  +route.query.correct > quiz.questionAmount ||
  +route.query.correct < 0
) {
  throw useError();
}
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto text-center">
        <h1 class="text-6xl pt-44">
          {{ $t("result.title") }} "{{ quiz.name }}"
        </h1>
        <h2 class="text-4xl">
          {{ $t("result.userHas") }} {{ route.query.correct }} /
          {{ quiz.questionAmount }}
          {{ $t("result.right") }}
        </h2>
        <NuxtLink
          to="/quizzes"
          class="bg-sky-600 py-4 px-7 rounded-xl mt-7 inline-block text-xl hover:bg-sky-400 cursor-pointer"
          >{{ $t("result.redirect") }}</NuxtLink
        >
      </div>
    </section>
  </div>
</template>
