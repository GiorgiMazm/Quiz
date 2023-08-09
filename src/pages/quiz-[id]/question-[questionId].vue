<script setup lang="ts">
useSeoMeta({
  title: "Quiz question",
});
const { getQuizById } = useQuiz();
const route = useRoute();
const router = useRouter();

const quiz = await getQuizById(String(route.params.id));
const questionId = +route.params.questionId;
const question = quiz.questionList[questionId - 1];
const isAnswered = ref(question.isAnswered);
const isCorrectAnswerChosen = ref(false);
const isLastQuestion = computed(() => questionId >= quiz.questionAmount);
const correctAnswerCounter = ref(0);

if (route.query.correct) correctAnswerCounter.value = +route.query.correct;
function endQuiz() {
  const link = `/result-${quiz.id}/?correct=${correctAnswerCounter.value}`;
  router.push(link);
}
const getNextQuestionLink = computed(() => {
  return `/quiz-${quiz.id}/question-${questionId + 1}?correct=${
    correctAnswerCounter.value
  }`;
});
function handleAnswer(isCorrectChosen: boolean) {
  if (isAnswered.value) return;
  isCorrectAnswerChosen.value = isCorrectChosen;
  if (isCorrectChosen) {
    correctAnswerCounter.value++;
  }
  isAnswered.value = true;
}

function getOptionColor(option: string) {
  if (!isAnswered.value) return "bg-gray-600";
  if (option === question.correctOption) return "bg-green-600";
  else return "bg-red-600";
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
          {{ $t("endQuiz") }}
        </button>
        <h1>{{ question?.title }}?</h1>
        <div class="flex justify-between items-center py-4">
          <p>{{ $t("question") }} {{ questionId }}/{{ quiz.questionAmount }}</p>
          <img :src="question?.image" :alt="question.title" class="h-72" />
          <p>{{ correctAnswerCounter }} {{ $t("answeredCorrectly") }}</p>
        </div>
        <h2 v-if="isAnswered">
          <span v-if="!isCorrectAnswerChosen">{{ $t("wrong") }} </span>
          <span v-if="isCorrectAnswerChosen">{{ $t("correct") }} </span>
          {{ $t("correctWas") }}:
          <span class="text-yellow-400 underline">{{
            question.correctOption
          }}</span>
          <NuxtLink
            v-if="!isLastQuestion"
            :to="getNextQuestionLink"
            class="ml-4 hover:bg-amber-600 bg-red-600 rounded-xl px-2"
          >
            {{ $t("nextQuestion") }}
          </NuxtLink>
        </h2>
        <div class="flex flex-wrap justify-center">
          <QuestionOption
            v-for="(option, index) in question.options"
            :question="question"
            :option="option"
            :key="index"
            @answered.once="handleAnswer"
            :class="getOptionColor(option)"
          />
        </div>
      </div>
    </section>
  </div>
</template>
