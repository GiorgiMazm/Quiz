<script setup lang="ts">
const { getQuizzes, deleteQuiz } = useQuiz();
let quizList = ref(await getQuizzes());
async function handleDeletingQuiz(id: number) {
  await deleteQuiz(id);
  quizList.value = await getQuizzes();
}
</script>

<template>
  <div>
    <section>
      <div class="mx-auto container text-center">
        <h1 class="text-5xl my-5">Choose your quiz!!</h1>
        <div class="flex flex-col items-center">
          <NuxtLink to="newQuiz">Create new quiz</NuxtLink>
          <QuizCard
            @handleDeletingQuiz="handleDeletingQuiz"
            v-for="quiz in quizList"
            :quiz="quiz"
            :key="quiz.name"
          />
        </div>
      </div>
    </section>
  </div>
</template>
