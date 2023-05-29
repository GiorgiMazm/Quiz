<script setup lang="ts">
const { getQuizById } = useQuiz();
const route = useRoute();
const quiz = await getQuizById(+route.params.id);

const isAnswered = ref(
  quiz.questionList[+route.params.questionId - 1].isAnswered
);
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto">
        <div class="flex justify-around p-3">
          <button>End quiz</button>
          <button v-if="isAnswered">Next question</button>
        </div>
        <hr />
        <QuestionCard
          v-if="quiz"
          :question="quiz.questionList[+route.params.questionId - 1]"
        />
      </div>
    </section>
  </div>
</template>
