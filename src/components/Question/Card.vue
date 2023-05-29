<script setup lang="ts">
import Question from "~/types/Question";
import { UnwrapRef } from "vue/dist/vue";

const props = defineProps({
  question: {
    type: Object as () => UnwrapRef<Question>,
    required: true,
  },
});
const isAnswered = ref(props.question?.isAnswered);
const isCorrectAnswerChosen = ref(false);
function handleAnswer(isCorrectChosen: boolean) {
  if (!isAnswered.value) {
    isCorrectAnswerChosen.value = isCorrectChosen;
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
          <p>30</p>
          <img :src="props.question?.image" alt="light bulb" class="h-72" />
          <p>0 correct</p>
        </div>
        <h2 v-if="isAnswered">
          <span v-if="!isCorrectAnswerChosen">You are wrong! </span>
          <span v-if="isCorrectAnswerChosen">You are right! </span> The right
          answer was:
          <span class="text-yellow-400 underline">{{
            question.correctOption
          }}</span>
          <button class="ml-4 hover:bg-amber-600 bg-red-600 rounded-xl px-2">
            next question
          </button>
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
