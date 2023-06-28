import Question from "~/types/Question";
import { ObjectId } from "bson";
import { QuizCategory } from "~/types/QuizCategory";
export default class Quiz {
  get category(): QuizCategory {
    return this._category;
  }

  set category(value: QuizCategory) {
    this._category = value;
  }
  constructor(
    name: string,
    questionList: Question[],
    description: string,
    id: ObjectId,
    category: QuizCategory
  ) {
    this._name = name;
    this._questionList = questionList;
    this._description = description;
    this._id = id;
    this._category = category;
  }

  private _isActive: boolean = false;
  private _questionList: Question[];
  private _name: string;
  private _id: ObjectId;
  private _description: string;
  private _category: QuizCategory;

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }

  get questionList(): Question[] {
    return this._questionList;
  }

  set questionList(value: Question[]) {
    this._questionList = value;
  }

  get questionAmount(): number {
    return this._questionList.length;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get id(): ObjectId {
    return this._id;
  }

  set id(value: ObjectId) {
    this._id = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
