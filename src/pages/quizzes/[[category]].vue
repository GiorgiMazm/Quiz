<script setup lang="ts">
import { QuizCategory } from "~/types/QuizCategory";
import User from "~/types/User";
import { ObjectId } from "bson";

useSeoMeta({
  title: "Quizzes list",
});
const route = useRoute();
const { getQuizzes, deleteQuiz } = useQuiz();
const { getCurrentUser } = await useUser();
const router = useRouter();

const pathFilter = capitalizeFirstLetter(
  String(route.params.category)
) as QuizCategory;
const filter = ref(QuizCategory[pathFilter] || QuizCategory.All);
let quizList = ref(
  await getQuizzes(filter.value, route.query.user as unknown as ObjectId)
);
async function handleDeletingQuiz(id: number) {
  await deleteQuiz(id);
  quizList.value = await getQuizzes(filter.value);
}

function filterQuizzes() {
  if (filter.value === QuizCategory.All) {
    if (route.query.user) {
      router.push(`/quizzes?user=${route.query.user}`);
    } else router.push(`/quizzes`);
  }
  if (route.query.user) {
    router.push(
      `/quizzes/${filter.value.toLowerCase()}?user=${route.query.user}`
    );
  } else router.push(`/quizzes/${filter.value.toLowerCase()}`);
}

async function showUserQuizzes() {
  const user = (await getCurrentUser()) as User;
  await router.push(`/quizzes/${filter.value.toLowerCase()}?user=${user._id}`);

  window.location.reload();
}

async function showAllQuizzes() {
  if (filter.value === QuizCategory.All) {
    await router.push(`/quizzes`);
  }
  await router.push(`/quizzes/${filter.value.toLowerCase()}`);
  window.location.reload();
}
</script>

<template>
  <div>
    <section>
      <div class="mx-auto container text-center">
        <h1 class="text-5xl my-5">Choose your quiz!!</h1>
        <div class="flex flex-col items-center">
          <NuxtLink to="/newQuiz">Create new quiz</NuxtLink>

          <div class="mt-3">
            <label>Category</label>
            <select
              @change="filterQuizzes"
              name="correctAnswer"
              class="border-2 ml-2"
              v-model="filter"
            >
              <option v-for="option in QuizCategory" :value="option">
                {{ option }}
              </option>
            </select>

            <button @click="showUserQuizzes" class="ml-5">My quizzes</button>
            <button @click="showAllQuizzes" class="ml-5">All quizzes</button>
          </div>
          <QuizCard
            @handleDeletingQuiz="handleDeletingQuiz"
            v-for="quiz in quizList"
            :quiz="quiz"
            :key="quiz.name"
          />
        </div>
      </div>
    </section>
  </div>
</template>
