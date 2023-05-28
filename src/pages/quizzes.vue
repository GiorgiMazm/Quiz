<script setup lang="ts">
const { gameList } = useGames();
</script>

<template>
  <div>
    <section>
      <div class="mx-auto container text-center">
        <h1 class="text-5xl my-5">Choose your quiz!!</h1>
        <div class="flex flex-col items-center">
          <QuizCard v-for="game in gameList" :game="game" :key="game.name" />
        </div>
      </div>
    </section>
  </div>
</template>
