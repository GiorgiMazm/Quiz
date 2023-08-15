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
    <section class="bg-emerald-600 md:py-24">
      <div class="container mx-auto">
        <form
          @submit.prevent="signUp"
          class="bg-white rounded-xl p-12 text-center w-full lg:w-3/5 mx-auto text-gray-700"
        >
          <h1 class="pt-10 text-5xl font-bold">{{ $t("signUp.title") }}</h1>

          <div>
            <p class="text-red-600 ml-3 mt-6" v-if="validation.name.$invalid">
              {{ $t("nameInvalid") }}
            </p>
            <input
              class="ml-2 px-10 py-6 border-2 border-gray-900 border-opacity-10 inline-block mt-8 w-full md:w-4/5"
              type="text"
              :placeholder="$t('name')"
              v-model="formData.name"
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

          <button
            class="mt-9 mr-5 rounded-xl px-28 sm:px-32 py-3 sm:py-7 bg-green-700 hover:bg-emerald-600 hover:text-white"
          >
            {{ $t("signUp.submit") }}
          </button>

          <div class="mt-5">
            {{ $t("signUp.redirect") }}
            <NuxtLink
              class="text-yellow-600 font-bold cursor-pointer hover:text-cyan-500"
              to="/signIn"
              >{{ $t("signIn.name") }}
            </NuxtLink>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
