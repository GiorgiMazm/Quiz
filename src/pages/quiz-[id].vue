<script setup lang="ts">
const { gameList } = useGames();
const route = useRoute();
const game = gameList.find((game) => game.id === +route.params.id);
const pageLink = `/quiz-${route.params.id}/question-1`;
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto">
        <div v-if="game" class="flex justify-between w-2/5 mx-auto pt-9">
          <h1 class="text-4xl font-bold">{{ game.name }}</h1>
          <NuxtLink
            v-if="!game.isActive"
            @click="game.startGame()"
            :to="pageLink"
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
