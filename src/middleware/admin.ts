import User from "~/types/User";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { getCurrentUser } = await useUser();
  const user = (await getCurrentUser()) as User;
  if (!user?.admin) return navigateTo("/");
});
