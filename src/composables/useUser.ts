export default () => {
  async function createUser(user: any) {
    console.log("user was created: ", user);
  }
  return { createUser };
};
