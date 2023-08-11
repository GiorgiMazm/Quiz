<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/solid";
import Quiz from "~/types/Quiz";
import { QuizCategory } from "~/types/QuizCategory";
import User from "~/types/User";
import Question from "~/types/Question";
import { required } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import ValidationError from "~/types/ValidatationError";

const props = defineProps({
  quizData: Object,
});
const emit = defineEmits();

const { t } = useI18n();
const { getCurrentUser } = await useUser();

const questions = ref<Array<Question>>(props.quizData?.questionList || []);
const formData = reactive({
  name: props.quizData?.name || "",
  description: props.quizData?.description || "",
  category: props.quizData?.category || QuizCategory.Education,
});
const rules = {
  name: { required },
  description: { required },
  category: { required },
};
const validation = useVuelidate(rules, formData);

function validateQuestions() {
  let result = true;
  questions.value.some((question) => {
    if (question.title.trim() === "") {
      isQuestionValid.errorMessage = t("quizForm.error.title");
      result = false;
      return;
    } else if (
      question.options.length !== 4 ||
      question.options.some((option) => option.trim() === "")
    ) {
      isQuestionValid.errorMessage = t("quizForm.error.options");
      result = false;
      return;
    } else if (question.correctOption.trim() === "") {
      isQuestionValid.errorMessage = t("quizForm.error.correctOption");
      result = false;
      return;
    } else if (question.image.trim() === "") {
      isQuestionValid.errorMessage = t("quizForm.error.image");
      result = false;
      return;
    }
  });
  isQuestionValid.isValid = result;
  return result;
}

const isQuestionValid = reactive({
  errorMessage: "",
  isValid: true,
}) as ValidationError;

const user = (await getCurrentUser()) as unknown as User;
const QuizCategoryList = Object.values(QuizCategory).filter(
  (category) => category !== "All"
);

function addQuestion() {
  questions.value.push({
    options: [],
    correctOption: "",
    title: "",
    image: "",
    isAnswered: false,
  });
  validateQuestions();
}

function deleteQuestion(index: number) {
  questions.value.splice(index, 1);
}
function createQuizListener() {
  if (!validateQuestions() || validation.value.$invalid) return;

  const quiz = {
    name: formData.name,
    description: formData.description,
    questionList: questions.value,
    category: formData.category,
  } as Quiz;
  emit("quizSubmitted", quiz);
}
</script>

<template>
  <form>
    <div class="mt-5">
      <label>{{ $t("quizForm.name") }}</label>
      <input
        class="ml-2 px-2 py-1 rounded-xl w-3/5"
        type="text"
        :placeholder="$t('quizForm.placeholder.quiz')"
        v-model="formData.name"
      />
      <span class="text-red-600 pb-3 ml-3" v-if="validation.name.$invalid">{{
        $t("quizForm.error.name")
      }}</span>
    </div>

    <div class="mt-5 flex">
      <label>{{ $t("quizForm.description") }}</label>
      <textarea
        class="ml-2 px-2 py-1 rounded-xl w-3/5"
        :placeholder="$t('quizForm.placeholder.description')"
        v-model="formData.description"
      />
      <span
        class="text-red-600 pb-3 ml-3"
        v-if="validation.description.$invalid"
        >{{ $t("quizForm.error.description") }}</span
      >
    </div>

    <div>
      <label>{{ $t("quizForm.category") }}</label>
      <select
        v-model="formData.category"
        name="category"
        class="ml-3 mb-3 mt-5"
      >
        <option v-for="category in QuizCategoryList" :value="category">
          {{ $t(`category.${category.toLowerCase()}`) }}
        </option>
      </select>
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
        <p class="text-red-600 pb-3 ml-3" v-if="!isQuestionValid.isValid">
          {{ $t("quizForm.error.question") }} {{ isQuestionValid.errorMessage }}
        </p>
        <label>{{ $t("quizForm.question") }}</label>
        <input
          class="ml-2 px-2 py-1 rounded-xl mb-3 w-3/5"
          type="text"
          :placeholder="$t('quizForm.placeholder.question')"
          v-model="question.title"
          @keyup="validateQuestions"
        />
      </div>

      <div>
        <label>{{ $t("quizForm.option") }} 1</label>
        <input
          class="ml-2 px-2 py-1 rounded-xl mb-3 w-3/5"
          type="text"
          :placeholder="$t('quizForm.placeholder.firstOption')"
          v-model="question.options[0]"
          @keyup="validateQuestions"
        />
      </div>

      <div>
        <label>{{ $t("quizForm.option") }} 2</label>
        <input
          class="ml-2 px-2 py-1 rounded-xl mb-3 w-3/5"
          type="text"
          :placeholder="$t('quizForm.placeholder.secondOption')"
          v-model="question.options[1]"
          @keyup="validateQuestions"
        />
      </div>

      <div>
        <label>{{ $t("quizForm.option") }} 3</label>
        <input
          class="ml-2 px-2 py-1 rounded-xl mb-3 w-3/5"
          type="text"
          :placeholder="$t('quizForm.placeholder.thirdOption')"
          v-model="question.options[2]"
          @keyup="validateQuestions"
        />
      </div>

      <div>
        <label>{{ $t("quizForm.option") }} 4</label>
        <input
          class="ml-2 px-2 py-1 rounded-xl mb-3 w-3/5"
          type="text"
          :placeholder="$t('quizForm.placeholder.fourthOption')"
          v-model="question.options[3]"
          @keyup="validateQuestions"
        />
      </div>

      <div>
        <label>{{ $t("quizForm.correct") }}</label>
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
        <p v-if="question.image">
          {{ $t("quizForm.image") }}
          <img class="h-44" :src="question?.image" :alt="question.title" />
        </p>
        <label>{{ $t("quizForm.uploadImage") }}</label>
        <input
          class="ml-2 px-2 py-1 rounded-xl mb-3 w-3/5"
          type="file"
          accept="jpg, png, jpeg"
          @change="(event) => { convertImage((event.target as HTMLInputElement).files![0] as unknown as Blob, question as Question, validateQuestions);}"
        />
      </div>
    </div>
    <button @click.prevent="addQuestion">
      {{ $t("quizForm.addQuestion") }}
    </button>
    <br />
    <button
      class="mx-3 py-3 px-4 bg-amber-500 mt-3 inline-block hover:bg-red-600 rounded-l"
      @click.prevent="createQuizListener"
    >
      {{ $t("quizForm.submit") }}
    </button>
    <NuxtLink
      class="mx-3 py-3 px-4 bg-amber-500 mt-3 inline-block hover:bg-red-600 rounded-l"
      to="/quizzes"
      >{{ $t("quizForm.cancel") }}</NuxtLink
    >
  </form>
</template>
