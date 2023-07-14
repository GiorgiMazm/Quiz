<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/solid";

definePageMeta({ middleware: ["admin"] });
const { getAllUsers } = await useUser();
const users = await getAllUsers();
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto">
        <h1 class="text-5xl font-bold text-center pt-20">Admin page</h1>
        <h2 class="text-3xl text-center py-10">List of users:</h2>
        <ul v-for="user in users">
          <li>
            <div class="my-4 border-2 flex justify-between p-3">
              <div>
                <p>Name: {{ user.name }}</p>
                <p>Email: {{ user.email }}</p>
                <p class="text-red-600" v-if="user.admin">
                  This user is an Admin
                </p>
              </div>
              <XMarkIcon class="h-6 w-6 cursor-pointer hover:text-red-800" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
