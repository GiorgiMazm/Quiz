<script setup lang="ts">
const { getQuizById } = useQuizzes();
const route = useRoute();
const quiz = getQuizById(+route.params.id);
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto">
        <QuestionCard
          v-if="quiz"
          :question="quiz.questionList[+route.params.questionId - 1]"
        />
      </div>
    </section>
  </div>
</template>
