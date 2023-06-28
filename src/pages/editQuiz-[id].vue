<script setup lang="ts">
import Quiz from "~/types/Quiz";
import { XMarkIcon } from "@heroicons/vue/24/solid";
import Question from "~/types/Question";
import { QuizCategory } from "~/types/QuizCategory";

const { getQuizById, updateQuiz } = useQuiz();
const quiz: Quiz = await getQuizById(useRoute().params?.id.toString());
const questions = reactive(quiz.questionList);
const QuizCategoryList = Object.values(QuizCategory).filter(
  (category) => category !== "All"
);
function addQuestion() {
  questions.push({
    options: [],
    correctOption: "",
    title: "",
    image: "",
  } as unknown as Question);
}

function deleteQuestion(index: number) {
  questions.splice(index, 1);
}

function handleQuizUpdate() {
  updateQuiz(quiz);
  useRouter().push("/quizzes");
}
</script>

<template>
  <div>
    <section class="bg-sky-400 py-20">
      <div class="container mx-auto">
        <div>
          <form>
            New quiz creation
            <div class="mt-5">
              <label>Quiz name</label>
              <input
                class="ml-2 px-2 py-1 rounded-xl w-3/5"
                type="text"
                placeholder="name"
                v-model="quiz.name"
              />
            </div>

            <div class="mt-5 flex">
              <label>Description</label>
              <textarea
                class="ml-2 px-2 py-1 rounded-xl w-3/5"
                placeholder="Description"
                v-model="quiz.description"
              />
            </div>

            <div
              v-for="(question, index) in questions"
              class="border-2 border-gray-800 m-4 p-4"
            >
              <XMarkIcon
                class="h-6 w-6 cursor-pointer hover:text-red-800"
                @click.prevent="deleteQuestion(+index)"
              />
              <div>
                <label>Question</label>
                <input
                  class="ml-2 px-2 py-1 rounded-xl mb-3 w-3/5"
                  type="text"
                  placeholder="question..."
                  v-model="question.title"
                />
              </div>

              <div>
                <label>Option 1</label>
                <input
                  class="ml-2 px-2 py-1 rounded-xl mb-3 w-3/5"
                  type="text"
                  placeholder="First option"
                  v-model="question.options[0]"
                />
              </div>

              <div>
                <label>Option 2</label>
                <input
                  class="ml-2 px-2 py-1 rounded-xl mb-3 w-3/5"
                  type="text"
                  placeholder="Second option"
                  v-model="question.options[1]"
                />
              </div>

              <div>
                <label>Option 3</label>
                <input
                  class="ml-2 px-2 py-1 rounded-xl mb-3 w-3/5"
                  type="text"
                  placeholder="Third option"
                  v-model="question.options[2]"
                />
              </div>

              <div>
                <label>Option 4</label>
                <input
                  class="ml-2 px-2 py-1 rounded-xl mb-3 w-3/5"
                  type="text"
                  placeholder="Fourth option"
                  v-model="question.options[3]"
                />
              </div>

              <div>
                <label>Correct</label>
                <select
                  name="correctAnswer"
                  v-model="question.correctOption"
                  class="ml-3 mb-3 w-3/5"
                >
                  <option v-for="option in question.options" :value="option">
                    {{ option }}
                  </option>
                </select>
              </div>

              <div>
                <label>Image link</label>
                <input
                  class="ml-2 px-2 py-1 rounded-xl mb-3 w-3/5"
                  type="text"
                  placeholder="Image url"
                  v-model="question.image"
                />
              </div>
            </div>
            <button @click.prevent="addQuestion">Add question</button>
            <div>
              <label>Category</label>
              <select v-model="quiz.category" name="category" class="ml-3 mb-3">
                <option v-for="category in QuizCategoryList" :value="category">
                  {{ category }}
                </option>
              </select>
            </div>
            <button
              class="mx-3 py-3 px-4 bg-amber-500 mt-3 inline-block hover:bg-red-600 rounded-l"
              @click.prevent="handleQuizUpdate"
            >
              Save
            </button>
            <NuxtLink
              class="mx-3 py-3 px-4 bg-amber-500 mt-3 inline-block hover:bg-red-600 rounded-l"
              to="/quizzes"
              >Back</NuxtLink
            >
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
