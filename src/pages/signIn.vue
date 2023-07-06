<script setup lang="ts">
definePageMeta({ middleware: ["guest"] });
const { signIn } = useAuth();
const password = ref("");
const email = ref("");

async function login() {
  await signIn("credentials", {
    email: email.value,
    password: password.value,
    callbackUrl: "/",
  });
}
</script>

<template>
  <div>
    <section class="bg-emerald-600 py-24">
      <div class="container mx-auto">
        <form
          @submit.prevent="login"
          class="bg-white rounded-xl p-12 text-center w-3/5 mx-auto text-gray-700 min-w-[400px]"
        >
          <h1 class="pt-10 text-5xl font-bold">Sign in page</h1>

          <div>
            <input
              class="ml-2 px-10 py-6 border-2 border-gray-900 border-opacity-10 inline-block mt-8 w-4/5"
              type="email"
              placeholder="Email"
              v-model="email"
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

          <button
            class="mt-9 mr-5 rounded-xl px-32 py-6 bg-green-700 hover:bg-emerald-600 hover:text-white"
          >
            Sign in
          </button>

          <button
            @click.prevent="signIn('github', { callbackUrl: '/' })"
            class="mt-9 rounded-xl px-32 py-6 bg-green-700 hover:bg-emerald-600 hover:text-white"
          >
            Sign in with github
          </button>

          <div class="mt-5">
            Don't have an account? Then just
            <NuxtLink
              class="text-yellow-600 font-bold cursor-pointer hover:text-cyan-500"
              to="/signUp"
              >Sign up
            </NuxtLink>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
