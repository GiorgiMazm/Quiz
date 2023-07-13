<script setup lang="ts">
import User from "~/types/User";
import Quiz from "~/types/Quiz";
import { Ref } from "vue";

definePageMeta({ middleware: "auth" });
const { getCurrentUser } = await useUser();
const { getQuizById } = useQuiz();
const user: User & { image: string } = Object.assign(
  (await getCurrentUser()) as Object
);

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
        <h1 class="text-5xl text-center">Your Profile</h1>
        <div>
          <p v-if="user.image">
            <img class="h-44" :src="user.image" alt="avatar" />
          </p>
          <p>Name: {{ user.name }}</p>
          <p>Email: {{ user.email }}</p>

          <div v-if="!user.image">
            Your Quizzes:
            <ul v-for="quiz in quizzes">
              <li>
                <NuxtLink :to="'/quizView-' + quiz?.id">{{
                  quiz?.name
                }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
