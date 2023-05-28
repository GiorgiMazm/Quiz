<script setup lang="ts">
import Question from "~/types/Question";
import Game from "~/types/Game";

const questionList: Question[] = [
  new Question(
    ["Nicolo Tesla", "Thomas Edison", "Tony Stark", "Elon Mask"],
    "Who invented light bulb",
    "https://www.220.ru/static/tinymce/shutterstock_775772164-min.jpg",
    "Thomas Edison",
    1
  ),

  new Question(
    ["Hedonism", "Stoicism", "Skepticism", "Asceticism"],
    "The best philosophy",
    "https://saltmag.ru/media/articles/covers/2019/3194/Ph_PreviewVert.jpg",
    "Stoicism",
    2
  ),
];
const games = ref([
  new Game("the best name", questionList, 1),
  new Game("the worst name", questionList, 2),
]);
</script>

<template>
  <div>
    <section>
      <div class="mx-auto container text-center">
        <h1 class="text-5xl my-5">Choose your quiz!!</h1>
        <div class="flex flex-col items-center">
          <QuizCard v-for="game in games" :game="game" :key="game.name" />
        </div>
      </div>
    </section>
  </div>
</template>
