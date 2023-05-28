<script setup lang="ts">
const { getQuizById } = await useQuizzes();
const route = useRoute();
const quiz = getQuizById(+route.params.id);
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto">
        <div class="flex justify-around p-3">
          <button>End quiz</button> <button>Next question</button>
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
