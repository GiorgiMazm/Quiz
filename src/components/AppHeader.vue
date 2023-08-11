<script setup lang="ts">
import User from "~/types/User";

const { locale } = useI18n();
const { status, signOut } = useAuth();
const { getCurrentUser } = await useUser();

const isGuest = computed(() => status.value === "unauthenticated");
const user = (await getCurrentUser()) as User;
const isAdmin = computed(() => user.admin);
</script>

<template>
  <div>
    <header class="bg-sky-600 h-[10vh] flex items-center">
      <div class="container mx-auto">
        <nav class="flex justify-between">
          <ul class="flex w-1/5 justify-between">
            <li class="cursor-pointer hover:text-cyan-500">
              <NuxtLink to="/">{{ $t("home.name") }} </NuxtLink>
            </li>
            <li class="cursor-pointer hover:text-cyan-500">
              <NuxtLink to="/quizzes">{{ $t("quizzes.name") }} </NuxtLink>
            </li>
            <li v-if="!isGuest" class="cursor-pointer hover:text-cyan-500">
              <NuxtLink to="/profile">{{ $t("profile.name") }} </NuxtLink>
            </li>
          </ul>

          <div>
            <select v-model="locale" class="mr-3">
              <option value="en">en</option>
              <option value="de">de</option>
              <option value="ru">ru</option>
            </select>
            <NuxtLink
              v-if="isGuest"
              class="cursor-pointer hover:text-cyan-500"
              to="/signIn"
              >{{ $t("signIn.name") }}
            </NuxtLink>

            <button
              v-else
              class="cursor-pointer hover:text-cyan-500"
              @click="signOut()"
            >
              {{ $t("logout") }}
            </button>

            <NuxtLink
              v-if="isAdmin"
              class="cursor-pointer hover:text-cyan-500 ml-5"
              to="/admin"
              >{{ $t("admin.name") }}</NuxtLink
            >
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>
