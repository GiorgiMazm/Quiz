<script setup lang="ts">
definePageMeta({ middleware: ["guest"] });
useSeoMeta({
  title: "Sign up",
});
const { createUser } = await useUser();
const { signIn } = useAuth();
const name = ref("");
const password = ref("");
const email = ref("");
async function signUp() {
  await createUser({
    name: name.value,
    password: password.value,
    email: email.value,
    quizzes: [],
  });

  await signIn("credentials", {
    email: email.value,
    password: password.value,
    callbackUrl: "/",
  });

  await useRouter().push("/");
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
              v-model="name"
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

          <div class="mt-5">
            Already have an account? Then just
            <NuxtLink
              class="text-yellow-600 font-bold cursor-pointer hover:text-cyan-500"
              to="/signIn"
              >Sign in
            </NuxtLink>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
