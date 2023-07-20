import connectDb from "../../plugins/connectDb";

export default defineEventHandler(async (event) => {
  const db = await connectDb();
  if (!db) return;

  const users = await db.collection("users");
  const body = await readBody(event);
  await validateUser(body);
  await users.insertOne(body);
  return "success";
});
