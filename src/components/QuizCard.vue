<script setup lang="ts">
import Game from "~/types/Game";
import { UnwrapRef } from "vue";

const props = defineProps({
  game: {
    type: Object as () => UnwrapRef<Game>,
    required: true,
  },
});
const gameLink = `/quiz-${props.game.id}`;
</script>

<template>
  <div class="flex w-[30%] justify-between border-2 my-2 p-3">
    <p>{{ props.game.name }}</p>
    <p>Amount of questions: {{ props.game.questionAmount }}</p>
    <NuxtLink class="hover:text-red-600" :to="gameLink">Start quiz</NuxtLink>
  </div>
</template>
