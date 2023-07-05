import { ObjectId } from "bson";

export default interface User {
  nickname: string;
  password: string;
  email: string;
  quizzes: ObjectId[];
}
