<script setup lang="ts">
import User from "~/types/User";
import { XMarkIcon, Bars4Icon } from "@heroicons/vue/24/solid";

const { locale } = useI18n();
const { status, signOut } = useAuth();
const { getCurrentUser } = await useUser();

const isGuest = computed(() => status.value === "unauthenticated");
const user = (await getCurrentUser()) as User;
const isAdmin = computed(() => user.admin);
const navbarVisibility = ref(true);

const router = useRouter();
router.afterEach(() => {
  if (window.innerWidth > 650) return;
  navbarVisibility.value = false;
});
function navbarToggle() {
  navbarVisibility.value = !navbarVisibility.value;
}
</script>

<template>
  <div>
    <header
      class="bg-sky-600 sm:h-[10vh] flex items-center p-4 sm:p-0 fixed w-full top-0 sm:static"
    >
      <div class="container mx-auto">
        <div class="flex justify-between">
          <img src="/icons/icon-48x48.png" alt="logo" class="sm:hidden" />
          <Bars4Icon
            class="h-6 w-6 cursor-pointer hover:text-red-800 sm:hidden"
            @click="navbarToggle"
            v-if="!navbarVisibility"
          />
          <XMarkIcon
            class="h-6 w-6 cursor-pointer hover:text-red-800 self-end sm:hidden"
            @click="navbarToggle"
            v-if="navbarVisibility"
          />
        </div>
        <Transition>
          <nav
            class="flex justify-around sm:justify-between flex-col sm:flex-row p-5 sm:p-0 sm:h-auto h-[60vh]"
            v-if="navbarVisibility"
          >
            <ul
              class="flex flex-col sm:flex-row w-2/5 lg:w-1/5 justify-evenly h-2/5"
            >
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

            <div
              class="flex flex-col sm:flex-row items-start justify-evenly h-2/5"
            >
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
                class="cursor-pointer hover:text-cyan-500 sm:ml-5"
                to="/admin"
                >{{ $t("admin.name") }}</NuxtLink
              >
            </div>
          </nav>
        </Transition>
      </div>
    </header>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
