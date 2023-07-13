<script setup lang="ts">
definePageMeta({ middleware: ["admin"] });
const { getAllUsers } = await useUser();
const users = await getAllUsers();
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto">
        <h1>admin page</h1>
        <h2>List of users:</h2>
        <ul v-for="user in users">
          <li>
            <div class="my-4 border-2">
              <p>Name: {{ user.name }}</p>
              <p>Email: {{ user.email }}</p>
              <p class="text-red-600" v-if="user.admin">This is an Admin</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
