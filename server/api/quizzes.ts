import connectDb from "../plugins/connectDb";

export default defineEventHandler(async () => {
  const client = await connectDb();
  if (!client) return;

  const db = await client.db("quiz");
  const quizzes = await db.collection("quizzes");

  return quizzes.find().toArray();
});
