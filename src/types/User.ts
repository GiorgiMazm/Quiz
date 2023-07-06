import { ObjectId } from "bson";

export default interface User {
  name: string;
  password: string;
  email: string;
  quizzes: ObjectId[];
}
