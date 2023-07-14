import User from "~/types/User";

export default async () => {
  const url = "/api/user";
  const { getSession } = useAuth();
  const session = await getSession();

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

  async function getCurrentUser() {
    if (session.user?.image) {
      return session.user;
    }
    const { data, error } = await useFetch(`${url}/${session.user?.email}`, {
      method: "GET",
    });
    if (error.value) {
      throw createError({
        statusCode: 404,
        statusMessage:
          "Something went wrong with fetching data, try again later",
      });
    }

    return data.value;
  }

  async function getAllUsers() {
    const { data, error } = await useFetch(`${url}/user`, {
      method: "GET",
    });
    if (error.value) {
      throw createError({
        statusCode: 404,
        statusMessage:
          "Something went wrong with fetching data, try again later",
      });
    }

    return data.value as unknown as User[];
  }

  async function deleteUser(email: string) {
    const { data, error } = await useFetch(`${url}/${email}`, {
      // @ts-ignore
      method: "DELETE",
    });
    if (error.value) {
      throw createError({
        statusCode: 404,
        statusMessage:
          "Something went wrong with fetching data, try again later",
      });
    }
    return data.value;
  }

  return {
    createUser,
    getCurrentUser,
    getAllUsers,
    deleteUser,
  };
};
