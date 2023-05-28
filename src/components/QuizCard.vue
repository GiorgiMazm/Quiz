<script setup lang="ts">
import Quiz from "~/types/Quiz";
import { UnwrapRef } from "vue";

const props = defineProps({
  quiz: {
    type: Object as () => UnwrapRef<Quiz>,
    required: true,
  },
});
const quizLink = `/quiz-${props.quiz.id}`;
</script>

<template>
  <div class="flex w-[30%] justify-between border-2 my-2 p-3">
    <p>{{ props.quiz.name }}</p>
    <p>Amount of questions: {{ props.quiz.questionAmount }}</p>
    <NuxtLink class="hover:text-red-600" :to="quizLink">Start quiz</NuxtLink>
  </div>
</template>
