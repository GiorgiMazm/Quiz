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

function chooseOption() {
  if (props.question.isAnswered) {
    console.log("should return!!");
    return;
  }
  props.question.isAnswered = true;

  if (props.question.correctOption === props.option) {
    divCLass.value += " bg-green-600";
  } else divCLass.value += " bg-red-600";
}
const divCLass = ref(
  "text-center font-bold text-4xl text-gray-300 bg-gray-600 m-2 py-4 cursor-pointer"
);
</script>

<template>
  <div class="w-1/2">
    <div :class="divCLass" @click="chooseOption">
      <span> {{ props.option }} </span>
    </div>
  </div>
</template>
