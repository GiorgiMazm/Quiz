export default () => {
  async function createUser(user: any) {
    console.log({ ...user, returnSecureToken: true });

    const { data, error } = await useFetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCuqzMP_62FKapXdIWLMGQAwp7dmoC8phU",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { ...user, returnSecureToken: true },
      }
    );
    if (error.value) {
      throw createError({
        statusCode: 404,
        statusMessage:
          "Something went wrong with fetching data, try again later",
      });
    }
    console.log(data.value);
  }

  return { createUser };
};
