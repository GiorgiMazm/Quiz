import connectDb from "../plugins/connectDb";
import { ObjectId } from "bson";

export default defineEventHandler(async (event) => {
  const { filter, user } = getQuery(event);
  const db = await connectDb();
  if (!db) return;

  const quizzes = await db.collection("quizzes");
  const users = await db.collection("users");

  async function getQuizzesByUser(user: string) {
    const quizArray = await users.findOne(
      { _id: new ObjectId(user) },
      { projection: { quizzes: 1 } }
    );
    return quizArray?.quizzes;
  }

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
