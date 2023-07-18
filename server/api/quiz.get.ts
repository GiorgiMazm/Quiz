import connectDb from "../plugins/connectDb";
import { ObjectId } from "bson";

export default defineEventHandler(async (event) => {
  const { filter, user } = getQuery(event);
  const client = await connectDb();
  if (!client) return;

  const db = await client.db("quiz");
  const quizzes = await db.collection("quizzes");
  const users = await db.collection("users");

  async function getQuizzesByUser(user: string) {
    const quizArray = await users.findOne(
      { _id: new ObjectId(user) },
      { projection: { quizzes: 1 } }
    );
    return quizArray?.quizzes;
  }

  // if (!filter || (filter === "All" && !user)) {
  //   return quizzes.find().toArray();
  // } else if (!filter || (filter === "All" && user)) {
  //   const quizIds = await loh(String(user));
  //   return await quizzes.find({ _id: { $in: quizIds } }).toArray();
  // } else if (filter && user) {
  //   const quizIds = await loh(String(user));
  //   return await quizzes
  //     .find({ _id: { $in: quizIds }, category: filter })
  //     .toArray();
  // } else {
  //   return quizzes.find({ category: filter }).toArray();
  // }

  interface FilterQuery {
    category?: string;
    _id?: { $in: ObjectId[] };
  }
  const filterQuery: FilterQuery = {};

  if (filter && filter !== "All") {
    filterQuery.category = String(filter);
  }

  if (user) {
    const quizIds = await getQuizzesByUser(String(user));
    filterQuery._id = { $in: quizIds };
  }

  return quizzes.find(filterQuery).toArray();
});
