<script setup lang="ts">
definePageMeta({ middleware: "auth" });
const { getCurrentUser } = await useUser();

const currentUser = await getCurrentUser();
</script>

<template>
  <div>
    <section>
      <div class="mx-auto container">user profile</div>
      {{ currentUser }}
    </section>
  </div>
</template>
