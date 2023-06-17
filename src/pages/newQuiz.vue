<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/solid";
import Quiz from "~/types/Quiz";

const name = ref("");
const description = ref("");
const questions = ref<
  Array<{
    title: string;
    image: string;
    options: Array<string>;
    correctOption: string;
  }>
>([]);
const { createQuiz } = useQuiz();

function addQuestion() {
  questions.value.push({
    options: [],
    correctOption: "",
    title: "",
    image: "",
  });
}

function deleteQuestion(index: number) {
  questions.value.splice(index, 1);
}

async function handleCreateQuiz() {
  await createQuiz({
    name: name.value,
    description: description.value,
    questionList: questions.value,
  } as Quiz);

  await useRouter().push("/quizzes");
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
                v-model="name"
              />
            </div>

            <div class="mt-5 flex">
              <label>Description</label>
              <textarea
                class="ml-2 px-2 py-1 rounded-xl w-3/5"
                placeholder="Description"
                v-model="description"
              />
            </div>

            <div
              v-for="(question, index) in questions"
              class="border-2 border-gray-800 m-4 p-4"
            >
              <XMarkIcon
                class="h-6 w-6 cursor-pointer hover:text-red-800"
                @click.prevent="deleteQuestion(index)"
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
            <br />
            <button @click.prevent="handleCreateQuiz">Create</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
