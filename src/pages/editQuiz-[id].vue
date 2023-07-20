<script setup lang="ts">
import Quiz from "~/types/Quiz";
import { XMarkIcon } from "@heroicons/vue/24/solid";
import Question from "~/types/Question";
import { QuizCategory } from "~/types/QuizCategory";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import ValidationError from "~/types/ValidatationError";

const { getQuizById, updateQuiz } = useQuiz();
const quiz: Quiz = await getQuizById(useRoute().params?.id.toString());
const questions = reactive(quiz.questionList);
const formData = reactive({
  name: quiz.name,
  description: quiz.description,
  category: quiz.category,
});
const rules = {
  name: { required },
  description: { required },
  category: { required },
};
const validation = useVuelidate(rules, formData);

function validateQuestions() {
  let result = true;
  questions.some((question) => {
    if (question.title.trim() === "") {
      isQuestionValid.errorMessage = "Title is required";
      result = false;
      return;
    } else if (question.correctOption.trim() === "") {
      isQuestionValid.errorMessage = "Correct option is required";
      result = false;
      return;
    } else if (question.image.trim() === "") {
      isQuestionValid.errorMessage = "Image is required";
      result = false;
      return;
    } else {
      question.options.some((option) => {
        if (option.trim() === "") {
          isQuestionValid.errorMessage = "All 4 options must be filled";
          result = false;
          return;
        }
      });
    }
  });
  isQuestionValid.isValid = result;
  return result;
}

const isQuestionValid = reactive({
  isValid: true,
  errorMessage: "",
}) as ValidationError;

useSeoMeta({
  title: "Edit Quiz",
});

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
  validateQuestions();
}

function deleteQuestion(index: number) {
  questions.splice(index, 1);
}

function handleQuizUpdate() {
  if (!validateQuestions() || validation.value.$invalid) return;

  updateQuiz({
    ...formData,
    _questionList: quiz.questionList,
    _id: quiz.id,
  } as unknown as Quiz);
  useRouter().push("/quizzes");
}
</script>

<template>
  <div>
    <section class="bg-sky-400 py-20">
      <div class="container mx-auto">
        <div>
          <form>
            <h1 class="text-center text-5xl font-bold text-gray-700">
              Edit Quiz
            </h1>
            <div class="mt-5">
              <label>Quiz name</label>
              <input
                class="ml-2 px-2 py-1 rounded-xl w-3/5"
                type="text"
                placeholder="Name"
                v-model="formData.name"
              />
              <span
                class="text-red-600 pb-3 ml-3"
                v-if="validation.name.$invalid"
                >Name is required</span
              >
            </div>

            <div class="mt-5 flex">
              <label>Description</label>
              <textarea
                class="ml-2 px-2 py-1 rounded-xl w-3/5"
                placeholder="Description"
                v-model="formData.description"
              />
              <span
                class="text-red-600 pb-3 ml-3"
                v-if="validation.description.$invalid"
                >Description is required</span
              >
            </div>

            <div>
              <label>Category</label>
              <select
                v-model="formData.category"
                name="category"
                class="ml-3 mb-3 mt-5"
              >
                <option v-for="category in QuizCategoryList" :value="category">
                  {{ category }}
                </option>
              </select>
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
                <p
                  class="text-red-600 pb-3 ml-3"
                  v-if="!isQuestionValid.isValid"
                >
                  Question is not valid: {{ isQuestionValid.errorMessage }}
                </p>
                <label>Question</label>
                <input
                  class="ml-2 px-2 py-1 rounded-xl mb-3 w-3/5"
                  type="text"
                  placeholder="Title"
                  v-model="question.title"
                  @keyup="validateQuestions"
                />
              </div>

              <div>
                <label>Option 1</label>
                <input
                  class="ml-2 px-2 py-1 rounded-xl mb-3 w-3/5"
                  type="text"
                  placeholder="First option"
                  v-model="question.options[0]"
                  @keyup="validateQuestions"
                />
              </div>

              <div>
                <label>Option 2</label>
                <input
                  class="ml-2 px-2 py-1 rounded-xl mb-3 w-3/5"
                  type="text"
                  placeholder="Second option"
                  v-model="question.options[1]"
                  @keyup="validateQuestions"
                />
              </div>

              <div>
                <label>Option 3</label>
                <input
                  class="ml-2 px-2 py-1 rounded-xl mb-3 w-3/5"
                  type="text"
                  placeholder="Third option"
                  v-model="question.options[2]"
                  @keyup="validateQuestions"
                />
              </div>

              <div>
                <label>Option 4</label>
                <input
                  class="ml-2 px-2 py-1 rounded-xl mb-3 w-3/5"
                  type="text"
                  placeholder="Fourth option"
                  v-model="question.options[3]"
                  @keyup="validateQuestions"
                />
              </div>

              <div>
                <label>Correct</label>
                <select
                  name="correctAnswer"
                  v-model="question.correctOption"
                  class="ml-3 mb-3 w-3/5"
                  @change="validateQuestions"
                >
                  <option v-for="option in question.options" :value="option">
                    {{ option }}
                  </option>
                </select>
              </div>

              <div>
                <p>
                  Image
                  <img
                    v-if="question.image"
                    class="h-44"
                    :src="question.image"
                    :alt="question.title"
                  />
                </p>
                <label>Upload new</label>
                <input
                  class="ml-2 px-2 py-1 rounded-xl mb-3 w-3/5"
                  type="file"
                  placeholder="Image url"
                  accept="jpg, png, jpeg"
                  @change="(event) => { convertImage((event.target as HTMLInputElement).files![0] as unknown as Blob, question as Question, validateQuestions);}"
                />
              </div>
            </div>
            <button @click.prevent="addQuestion">Add question</button>
            <br />
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
