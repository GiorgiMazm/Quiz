<script setup lang="ts">
import { email, required } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

definePageMeta({ middleware: ["guest"] });
useSeoMeta({
  title: "Sign up",
});

const formData = reactive({
  name: "",
  password: "",
  email: "",
});
const rules = {
  name: { required },
  password: { required },
  email: { required, email },
};
const validation = useVuelidate(rules, formData);
const { createUser } = await useUser();
const { signIn } = useAuth();

async function signUp() {
  if (validation.value.$invalid) return;
  await createUser({
    ...formData,
    quizzes: [],
  });

  await signIn("credentials", {
    email: formData.email,
    password: formData.password,
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
            <p class="text-red-600 ml-3 mt-6" v-if="validation.name.$invalid">
              Name is required
            </p>
            <input
              class="ml-2 px-10 py-6 border-2 border-gray-900 border-opacity-10 inline-block mt-8 w-4/5"
              type="text"
              placeholder="Name"
              v-model="formData.name"
            />
          </div>

          <div>
            <p
              class="text-red-600 ml-3 mt-6"
              v-if="validation.password.$invalid"
            >
              Password is required
            </p>
            <input
              class="ml-2 px-10 py-6 border-2 border-gray-900 border-opacity-10 inline-block mt-8 w-4/5"
              type="password"
              placeholder="Password"
              v-model="formData.password"
            />
          </div>

          <div>
            <p class="text-red-600 ml-3 mt-6" v-if="validation.email.$invalid">
              Email must be valid
            </p>
            <input
              class="ml-2 px-10 py-6 border-2 border-gray-900 border-opacity-10 inline-block mt-8 w-4/5"
              type="email"
              placeholder="Email"
              v-model="formData.email"
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
