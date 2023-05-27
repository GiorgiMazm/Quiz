<script setup lang="ts">
import Question from "~/types/Question";

const questionList: Question[] = [
  new Question(
    ["Nicolo Tesla", "Thomas Edison", "Tony Stark", "Elon Mask"],
    "Who invented light bulb",
    "https://www.220.ru/static/tinymce/shutterstock_775772164-min.jpg",
    "Thomas Edison",
    1
  ),

  new Question(
    ["Hedonism", "Stoicism", "Skepticism", "Asceticism"],
    "The best philosophy",
    "https://saltmag.ru/media/articles/covers/2019/3194/Ph_PreviewVert.jpg",
    "Stoicism",
    2
  ),
];

const route = useRoute();
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto">
        <QuestionCard :question="questionList[+route.params.id - 1]" />
      </div>
    </section>
  </div>
</template>
