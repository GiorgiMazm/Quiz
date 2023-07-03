import connectDb from "../plugins/connectDb";

export default defineEventHandler(async (event) => {
  const client = await connectDb();
  if (!client) return;

  const db = await client.db("quiz");
  const quizzes = await db.collection("quizzes");

  const body = await readBody(event);
  validator(body);
  await quizzes.insertOne(body);
  return "success";
});
