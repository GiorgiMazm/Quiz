<script setup lang="ts">
import User from "~/types/User";

const { status, signOut } = useAuth();
const { getCurrentUser } = await useUser();

const isGuest = computed(() => status.value === "unauthenticated");
const user = (await getCurrentUser()) as User;
const isAdmin = computed(() => user?.admin);
</script>

<template>
  <div>
    <header class="bg-sky-600 h-[10vh] flex items-center">
      <div class="container mx-auto">
        <nav class="flex justify-between">
          <ul class="flex w-1/5 justify-between">
            <li class="cursor-pointer hover:text-cyan-500">
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li class="cursor-pointer hover:text-cyan-500">
              <NuxtLink to="/quizzes">Quizzes</NuxtLink>
            </li>
            <li v-if="!isGuest" class="cursor-pointer hover:text-cyan-500">
              <NuxtLink to="/profile">Profile</NuxtLink>
            </li>
          </ul>

          <div>
            <NuxtLink
              v-if="isGuest"
              class="cursor-pointer hover:text-cyan-500"
              to="/signIn"
              >Sign in
            </NuxtLink>

            <button
              v-else
              class="cursor-pointer hover:text-cyan-500"
              @click="signOut()"
            >
              Logout
            </button>

            <NuxtLink
              v-if="isAdmin"
              class="cursor-pointer hover:text-cyan-500 ml-5"
              to="/admin"
              >Admin</NuxtLink
            >
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>
