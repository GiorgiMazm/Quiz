<script setup lang="ts">
definePageMeta({ middleware: "auth" });
const { getSession } = useAuth();
const { getUserByEmail } = useUser();

const session = await getSession();
const currentUser = await getUserByEmail(session.user?.email || "");
</script>

<template>
  <div>
    <section>
      <div class="mx-auto container">user profile</div>
      {{ currentUser }}
    </section>
  </div>
</template>
