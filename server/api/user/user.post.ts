import connectDb from "../../plugins/connectDb";

export default defineEventHandler(async (event) => {
  const client = await connectDb();
  if (!client) return;

  const db = await client.db("quiz");
  const users = await db.collection("users");

  const body = await readBody(event);
  await users.insertOne(body);
  return "success";
});
