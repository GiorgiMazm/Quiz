import User from "../../src/types/User";
import createValidationError from "./createCustomError";
import connectDb from "../plugins/connectDb";

export default async function (user: User) {
  isFieldEmpty(user, "name");
  isFieldEmpty(user, "password");
  isFieldEmpty(user, "email");
  isQuizzesArray(user);
  await isEmailUnique(user);
}
function isFieldEmpty(user: User, field: "name" | "password" | "email") {
  if (!user[field] || user[field].trim() === "") {
    createValidationError(field);
  }
}

async function isEmailUnique(newUser: User) {
  const client = await connectDb();
  if (!client) return;

  const db = await client.db("quiz");
  const collection = await db.collection("users");
  const users = await collection.find().toArray();

  if (users.find((user) => user.email === newUser.email)) {
    throw createError({
      message: "email must be unique",
      statusCode: 400,
      statusMessage: "Bad Request",
    });
  }
}

function isQuizzesArray(user: User) {
  if (!Array.isArray(user.quizzes)) {
    throw createError({
      message: "quizzes must be an array",
      statusCode: 400,
      statusMessage: "Bad Request",
    });
  }
}
