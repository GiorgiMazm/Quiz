<script setup lang="ts">
import Quiz from "~/types/Quiz";
import { UnwrapRef } from "vue";
import { XMarkIcon, PencilIcon } from "@heroicons/vue/24/solid";
import User from "~/types/User";

const props = defineProps({
  quiz: {
    type: Object as () => UnwrapRef<Quiz>,
    required: true,
  },
});
const { getCurrentUser } = await useUser();
const quizLink = `/quizView-${props.quiz.id}`;
function editQuiz() {
  useRouter().push(`/editQuiz-${props.quiz.id}`);
}

const user = (await getCurrentUser()) as User;
const canUserInteract = computed(() => {
  return user.admin || user.quizzes?.find((quiz) => quiz === props.quiz?.id);
});
</script>

<template>
  <div class="flex w-[50%] justify-between border-2 my-2 p-3">
    <p>{{ props.quiz.name }}</p>
    <p>Amount of questions: {{ props.quiz.questionAmount }}</p>
    <NuxtLink class="hover:text-red-600" :to="quizLink">Start quiz</NuxtLink>
    <div class="flex" v-if="canUserInteract">
      <PencilIcon
        class="h-6 w-6 cursor-pointer hover:text-red-800 mr-4"
        @click="editQuiz"
      />
      <XMarkIcon
        @click="$emit('handleDeletingQuiz', props.quiz?.id)"
        class="h-6 w-6 cursor-pointer hover:text-red-800"
      />
    </div>
  </div>
</template>
