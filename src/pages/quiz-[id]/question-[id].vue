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

const route = useRoute();
const game = games.value.find((game) => game.id === 1);
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto">
        <!--         @ts-ignore -->
        <QuestionCard :question="game?.questionList[+route.params.id - 1]" />
      </div>
    </section>
  </div>
</template>
