import connectDb from "../plugins/connectDb";

export default defineEventHandler(async (event) => {
  const filter = getQuery(event).filter;
  const client = await connectDb();
  if (!client) return;

  const db = await client.db("quiz");
  const quizzes = await db.collection("quizzes");

  if (!filter || filter === "All") {
    return quizzes.find().toArray();
  } else {
    return quizzes.find({ category: filter }).toArray();
  }
});
