<script setup lang="ts">
const props = defineProps({
  title: String,
  correctOption: String,
});

const { isAnswered } = useQuiz();
function chooseOption() {
  if (isAnswered.value) {
    console.log("should return!!");
    return;
  }
  console.log(isAnswered.value);
  isAnswered.value = true;
  console.log(isAnswered.value);
  if (props.title === props.correctOption) {
    divCLass.value += " bg-green-600";
  } else divCLass.value += " bg-red-600";
}
const divCLass = ref(
  "text-center font-bold text-4xl text-gray-300 bg-gray-600 m-2 py-4 cursor-pointer hover:bg-gray-500"
);
</script>

<template>
  <div class="w-1/2">
    <div :class="divCLass" @click="chooseOption">
      <span> {{ props.title }} </span>
    </div>
  </div>
</template>
