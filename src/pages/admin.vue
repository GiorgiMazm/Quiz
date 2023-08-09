<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/solid";
import User from "~/types/User";

definePageMeta({ middleware: ["admin"] });
useSeoMeta({
  title: "Admin view",
});
const { getAllUsers, deleteUser } = await useUser();
const users = await getAllUsers();
const userList = ref(users);

async function handleDelete(user: User) {
  await deleteUser(user.email);
  userList.value = await getAllUsers();
}
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto">
        <h1 class="text-5xl font-bold text-center pt-20">
          {{ $t("admin.title") }}!!
        </h1>
        <h2 class="text-3xl text-center py-10">{{ $t("admin.list") }}:</h2>
        <ul v-for="user in userList">
          <li>
            <div class="my-4 border-2 flex justify-between p-3">
              <div>
                <p>{{ $t("name") }}: {{ user.name }}</p>
                <p>{{ $t("email") }}: {{ user.email }}</p>
                <p class="text-red-600" v-if="user.admin">
                  {{ $t("admin.admin") }}
                </p>
              </div>
              <XMarkIcon
                @click="handleDelete(user as User)"
                class="h-6 w-6 cursor-pointer hover:text-red-800"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
