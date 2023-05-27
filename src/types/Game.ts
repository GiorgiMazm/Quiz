import Question from "~/types/Question";

export default class Game {
  constructor(name: string, questionList: Question[], id: number) {
    this._name = name;
    this._questionList = questionList;
    this._id = id;
  }
  private _isActive: boolean = false;
  private _questionList: Question[];
  private _name: string;
  private _id: number;
  startGame() {
    this._isActive = true;
    console.log("The game was started");
  }

  finishGame() {
    this._isActive = false;
    console.log("The game was finished");
  }

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

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
