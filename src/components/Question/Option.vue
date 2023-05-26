<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

<template>
  <div class="w-1/2">
    <div class="text-center font-bold text-4xl bg-red-600 m-2 py-7">
      <span> {{ props.title }} </span>
    </div>
  </div>
</template>
