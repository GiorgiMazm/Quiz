<script setup lang="ts">
function startQuiz() {
  isVisible.value = false;
  console.log("quiz was started");
}

function endQuiz() {
  isVisible.value = true;
  console.log("quiz was ended");
}

const isVisible = ref(true);
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto">
        <div class="flex justify-between w-2/5 mx-auto pt-9">
          <NuxtLink v-if="isVisible" @click="startQuiz" to="/quiz/question-1"
            >Start game</NuxtLink
          >
          <button v-if="!isVisible" @click="endQuiz">End quiz</button>
          <button v-if="!isVisible" @click="endQuiz">Next question</button>
          <hr />
        </div>
        <div>
          <NuxtPage />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
