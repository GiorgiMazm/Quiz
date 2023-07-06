import User from "~/types/User";

export default () => {
  const url = "/api/user";
  async function createUser(user: User) {
    const { error } = await useFetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (error.value) {
      throw createError({
        statusCode: 404,
        statusMessage:
          "Something went wrong with fetching data, try again later",
      });
    }

    return "User was successfully created";
  }
  return { createUser };
};
