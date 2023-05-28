<script setup lang="ts">
const { getGameById } = useGames();
const route = useRoute();
const game = getGameById(+route.params.id);
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto">
        <QuestionCard
          v-if="game"
          :question="game.questionList[+route.params.questionId - 1]"
        />
      </div>
    </section>
  </div>
</template>
