<script setup lang="ts">
import { UnwrapRef } from "vue";
import Question from "~/types/Question";

const props = defineProps({
  question: {
    type: Object as () => UnwrapRef<Question>,
    required: true,
  },
  option: {
    type: String,
    required: true,
  },
});
const isCorrectChosen = props.question.correctOption === props.option;
function chooseOption() {
  if (props.question.isAnswered) return;
  props.question.isAnswered = true;
}
</script>

<template>
  <div
    class="w-[46%] text-center font-bold text-4xl text-gray-300 m-2 py-4 cursor-pointer"
    @click.once="
      chooseOption();
      $emit('answered', isCorrectChosen);
    "
  >
    <span> {{ props.option }} </span>
  </div>
</template>
