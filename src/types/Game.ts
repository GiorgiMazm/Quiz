import Question from "~/types/Question";

export default class Game {
  constructor(questionAmount: number, questionList: Question[]) {
    this._questionAmount = questionAmount;
    this._questionList = questionList;
  }
  private _isActive: boolean = false;
  startGame() {
    this._isActive = true;
  }

  finishGame() {
    this._isActive = false;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }

  get questionAmount(): number {
    return this._questionAmount;
  }

  set questionAmount(value: number) {
    this._questionAmount = value;
  }

  get questionList(): Question[] {
    return this._questionList;
  }

  set questionList(value: Question[]) {
    this._questionList = value;
  }

  private _questionAmount: number;

  private _questionList: Question[];
}
