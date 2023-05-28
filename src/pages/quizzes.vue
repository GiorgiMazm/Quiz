<script setup lang="ts">
const { quizList } = await useQuizzes();
</script>

<template>
  <div>
    <section>
      <div class="mx-auto container text-center">
        <h1 class="text-5xl my-5">Choose your quiz!!</h1>
        <div class="flex flex-col items-center">
          <QuizCard v-for="quiz in quizList" :quiz="quiz" :key="quiz.name" />
        </div>
      </div>
    </section>
  </div>
</template>
