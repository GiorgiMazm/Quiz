<script setup lang="ts">
import { QuizCategory } from "~/types/QuizCategory";

const route = useRoute();
const { getQuizzes, deleteQuiz } = useQuiz();
const router = useRouter();

const pathFilter = capitalizeFirstLetter(
  String(route.params.category)
) as QuizCategory;
const filter = ref(QuizCategory[pathFilter] || QuizCategory.All);
let quizList = ref(await getQuizzes(filter.value));
async function handleDeletingQuiz(id: number) {
  await deleteQuiz(id);
  quizList.value = await getQuizzes(filter.value);
}

function filterQuizzes() {
  if (filter.value === QuizCategory.All) {
    router.push("/quizzes");
    return;
  }
  router.push(`/quizzes/${filter.value.toLowerCase()}`);
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
