<script setup lang="ts"></script>

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
            <li class="cursor-pointer hover:text-cyan-500">
              <NuxtLink to="/profile">profile</NuxtLink>
            </li>
            <li class="cursor-pointer hover:text-cyan-500">
              <NuxtLink to="/signIn">sign in </NuxtLink>
            </li>
          </ul>
          logo
        </nav>
      </div>
    </header>
  </div>
</template>
