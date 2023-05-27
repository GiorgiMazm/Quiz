<script setup lang="ts">
import Question from "~/types/Question";

const props = defineProps({
  question: {
    type: Question,
    required: true,
  },
});
</script>

<template>
  <div>
    <section>
      <div class="text-center text-4xl">
        <h1>{{ props.question?.title }}?</h1>
        <div class="flex justify-between items-center py-4">
          <p>30</p>
          <img :src="props.question?.image" alt="light bulb" class="h-72" />
          <p>0 correct</p>
        </div>

        <div class="flex flex-wrap">
          <QuestionOption
            v-for="(option, index) in props.question?.options"
            :title="option"
            :key="index"
          />
        </div>
      </div>
    </section>
  </div>
</template>
