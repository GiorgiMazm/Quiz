<script setup lang="ts">
import User from "~/types/User";
import Quiz from "~/types/Quiz";
import { Ref } from "vue";

useSeoMeta({
  title: "Your Profile",
});
definePageMeta({ middleware: "auth" });
const { getCurrentUser } = await useUser();
const { getQuizById } = useQuiz();
const user: User = Object.assign((await getCurrentUser()) as unknown as User);

const quizzes: Ref<Quiz[]> = ref([]);
onBeforeMount(async () => {
  for (const quizID of user.quizzes) {
    const quiz = await getQuizById(String(quizID));
    quizzes.value.push(quiz);
  }
});
</script>

<template>
  <div>
    <section>
      <div class="mx-auto container">
        <h1 class="text-5xl font-bold text-center pt-20">
          {{ $t("profile.title") }}
        </h1>
        <div class="text-xl">
          <p v-if="user.image">
            <img class="h-44" :src="user.image" alt="avatar" />
          </p>
          <p class="pt-5">{{ $t("name") }}: {{ user.name }}</p>
          <p class="pt-5">{{ $t("email") }}: {{ user.email }}</p>

          <div v-if="!user.image" class="pt-5">
            {{ $t("profile.userQuizzes") }}:
            <ul v-for="quiz in quizzes">
              <li
                class="mx-5 mt-2 text-red-600 hover:text-cyan-400 inline-block"
              >
                <NuxtLink
                  aria-label="Navigate to your Quiz"
                  :to="'/quizView-' + quiz?.id"
                  >{{ quiz?.name }}</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
