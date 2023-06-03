<script setup lang="ts">
const { getQuizById } = useQuiz();
const route = useRoute();
const quiz = await getQuizById(+route.params.id);
const router = useRouter();

const correctAnswerCounter = ref(0);
if (route.query.correct) correctAnswerCounter.value = +route.query.correct;
function endQuiz() {
  const link = `/result-${quiz.id}/?correct=${correctAnswerCounter.value}`;
  correctAnswerCounter.value = 0;
  router.push(link);
}
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto">
        <div class="flex justify-around p-3">
          <button @click="endQuiz">End quiz</button>
        </div>
        <hr />
        <QuestionCard
          v-if="quiz"
          :question="quiz.questionList[+route.params.questionId - 1]"
          :questionAmount="quiz.questionAmount"
        />
      </div>
    </section>
  </div>
</template>
