<script setup lang="ts">
import Question from "~/types/Question";
import { UnwrapRef } from "vue/dist/vue";

const props = defineProps({
  question: {
    type: Object as () => UnwrapRef<Question>,
    required: true,
  },
  questionAmount: {
    type: Number,
    required: true,
  },
});

const isAnswered = ref(props.question?.isAnswered);
const isCorrectAnswerChosen = ref(false);
const route = useRoute();
const questionId = props.question.id;
const isLastQuestion = computed(() => questionId >= props.questionAmount);

const correctAnswerCounter = ref(0);
if (route.query.correct) correctAnswerCounter.value = +route.query.correct;

function getNextQuestionLink() {
  const currentQuizId = route.path.split("/question")[0].slice(-1);

  return `/quiz-${currentQuizId}/question-${questionId + 1}?correct=${
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
        <h1>{{ props.question?.title }}?</h1>
        <div class="flex justify-between items-center py-4">
          <p>Question {{ questionId }}/{{ props.questionAmount }}</p>
          <img :src="props.question?.image" alt="light bulb" class="h-72" />
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
            v-for="(option, index) in props.question?.options"
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
