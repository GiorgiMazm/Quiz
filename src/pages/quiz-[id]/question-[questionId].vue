<script setup lang="ts">
const { getQuizById } = useQuiz();
const route = useRoute();
const quiz = await getQuizById(+route.params.id);
const router = useRouter();
const correctAnswerCounter = ref(0);
const question = quiz.questionList[+route.params.questionId - 1];
if (route.query.correct) correctAnswerCounter.value = +route.query.correct;
function endQuiz() {
  const link = `/result-${quiz.id}/?correct=${correctAnswerCounter.value}`;
  router.push(link);
}

const isAnswered = ref(question?.isAnswered);
const isCorrectAnswerChosen = ref(false);
const isLastQuestion = computed(() => question.id >= quiz.questionAmount);
function getNextQuestionLink() {
  const currentQuizId = route.path.split("/question")[0].slice(-1);

  return `/quiz-${currentQuizId}/question-${question.id + 1}?correct=${
    correctAnswerCounter.value
  }`;
}
function handleAnswer(isCorrectChosen: boolean) {
  if (!isAnswered.value) {
    isCorrectAnswerChosen.value = isCorrectChosen;
    if (isCorrectChosen) {
      correctAnswerCounter.value++;
    }
    isAnswered.value = true;
  }
}
</script>

<template>
  <div>
    <section>
      <div class="text-center text-4xl">
        <button
          class="bg-amber-600 hover:bg-sky-400 px-4 py-2 rounded-xl mt-4 text-2xl"
          @click="endQuiz"
        >
          End quiz
        </button>
        <h1>{{ question?.title }}?</h1>
        <div class="flex justify-between items-center py-4">
          <p>Question {{ question.id }}/{{ quiz.questionAmount }}</p>
          <img :src="question?.image" alt="light bulb" class="h-72" />
          <p>{{ correctAnswerCounter }} correct</p>
        </div>
        <h2 v-if="isAnswered">
          <span v-if="!isCorrectAnswerChosen">You are wrong! </span>
          <span v-if="isCorrectAnswerChosen">You are right! </span> The right
          answer was:
          <span class="text-yellow-400 underline">{{
            question.correctOption
          }}</span>
          <NuxtLink
            v-if="!isLastQuestion"
            :to="getNextQuestionLink()"
            class="ml-4 hover:bg-amber-600 bg-red-600 rounded-xl px-2"
          >
            next question
          </NuxtLink>
        </h2>
        <div class="flex flex-wrap">
          <QuestionOption
            v-for="(option, index) in question.options"
            :question="question"
            :option="option"
            :key="index"
            @answered.once="handleAnswer"
            :disabled="isAnswered"
          />
        </div>
      </div>
    </section>
  </div>
</template>
