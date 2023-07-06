<script setup lang="ts">
const { createUser } = useUser();
const nickname = ref("");
const password = ref("");
const email = ref("");
async function signUp() {
  await createUser({
    nickname: nickname.value,
    password: password.value,
    email: email.value,
    quizzes: [],
  });

  await useRouter().push("/signIn");
}
</script>

<template>
  <div>
    <section class="bg-emerald-600 py-24">
      <div class="container mx-auto">
        <form
          @submit.prevent="signUp"
          class="bg-white rounded-xl p-12 text-center w-3/5 mx-auto text-gray-700 min-w-[400px]"
        >
          <h1 class="pt-10 text-5xl font-bold">Sign up page</h1>

          <div>
            <input
              class="ml-2 px-10 py-6 border-2 border-gray-900 border-opacity-10 inline-block mt-8 w-4/5"
              type="text"
              placeholder="Name"
              v-model="nickname"
            />
          </div>

          <div>
            <input
              class="ml-2 px-10 py-6 border-2 border-gray-900 border-opacity-10 inline-block mt-8 w-4/5"
              type="password"
              placeholder="Password"
              v-model="password"
            />
          </div>

          <div>
            <input
              class="ml-2 px-10 py-6 border-2 border-gray-900 border-opacity-10 inline-block mt-8 w-4/5"
              type="email"
              placeholder="Email"
              v-model="email"
            />
          </div>

          <button
            class="mt-9 rounded-xl px-32 py-6 bg-green-700 hover:bg-emerald-600 hover:text-white"
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  </div>
</template>
