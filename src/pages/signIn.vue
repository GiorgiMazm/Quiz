<script setup lang="ts">
import { email, required } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

useSeoMeta({
  title: "Sign in",
});
definePageMeta({ middleware: ["guest"] });

const formData = reactive({
  password: "",
  email: "",
});
const rules = {
  password: { required },
  email: { required, email },
};
const validation = useVuelidate(rules, formData);
const { signIn } = useAuth();
async function login() {
  if (validation.value.$invalid) return;
  await signIn("credentials", {
    ...formData,
    callbackUrl: "/",
  });
}
</script>

<template>
  <div>
    <section class="bg-emerald-600 md:py-24">
      <div class="container mx-auto">
        <form
          @submit.prevent="login"
          class="bg-white rounded-xl p-12 text-center w-full lg:w-3/5 mx-auto text-gray-700"
        >
          <h1 class="pt-10 text-5xl font-bold">{{ $t("signIn.title") }}</h1>

          <div>
            <p class="text-red-600 ml-3 mt-6" v-if="validation.email.$invalid">
              {{ $t("emailInvalid") }}
            </p>
            <input
              class="ml-2 px-10 py-6 border-2 border-gray-900 border-opacity-10 inline-block mt-8 w-full md:w-4/5"
              type="email"
              :placeholder="$t('email')"
              v-model="formData.email"
            />
          </div>
          <div>
            <p
              class="text-red-600 ml-3 mt-6"
              v-if="validation.password.$invalid"
            >
              {{ $t("passwordInvalid") }}
            </p>
            <input
              class="ml-2 px-10 py-6 border-2 border-gray-900 border-opacity-10 inline-block mt-8 w-full md:w-4/5"
              type="password"
              :placeholder="$t('password')"
              v-model="formData.password"
            />
          </div>

          <button
            class="mt-9 mr-5 rounded-xl px-28 sm:px-32 py-3 sm:py-7 bg-green-700 hover:bg-emerald-600 hover:text-white"
          >
            {{ $t("signIn.submit") }}
          </button>

          <button
            @click.prevent="signIn('github', { callbackUrl: '/' })"
            class="mt-9 rounded-xl text-white px-7 sm:px-10 py-2 sm:py-4 bg-black"
          >
            <img
              class="h-14 w-14 inline mr-3"
              src="/gitHubIcon.png"
              alt="github icon"
            />
            {{ $t("signIn.github") }}
          </button>

          <div class="mt-5">
            {{ $t("signIn.redirect") }}
            <NuxtLink
              class="text-yellow-600 font-bold cursor-pointer hover:text-cyan-500"
              to="/signUp"
              >{{ $t("signUp.name") }}
            </NuxtLink>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
