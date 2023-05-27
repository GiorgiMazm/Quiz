<script setup lang="ts">
import Game from "~/types/Game";
import Question from "~/types/Question";

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
const game = ref(new Game("the best name", questionList));
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto">
        <div class="flex justify-between w-2/5 mx-auto pt-9">
          <h1 class="text-4xl font-bold">{{ game.name }}</h1>
          <NuxtLink
            v-if="!game.isActive"
            @click="game.startGame()"
            to="/quiz-1/question-1"
            >Start game</NuxtLink
          >

          <button v-if="game.isActive" @click="game.finishGame()">
            End quiz
          </button>
          <button v-if="game.isActive" @click="game.finishGame()">
            Next question
          </button>
          <hr />
        </div>
        <div>
          <NuxtPage />
        </div>
      </div>
    </section>
  </div>
</template>
