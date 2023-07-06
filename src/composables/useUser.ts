import User from "~/types/User";

export default () => {
  const url = "/api/user";
  async function createUser(user: User) {
    const { error } = await useFetch(`${url}/user`, {
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

  async function getUserByEmail(email: string) {
    const { data, error } = await useFetch(`${url}/${email}`);
    if (error.value) {
      throw createError({
        statusCode: 404,
        statusMessage:
          "Something went wrong with fetching data, try again later",
      });
    }

    return data.value;
  }
  return { createUser, getUserByEmail };
};
