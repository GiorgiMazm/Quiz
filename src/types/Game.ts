import Question from "~/types/Question";

export default class Game {
  constructor(questionList: Question[]) {
    this._questionList = questionList;
  }
  private _isActive: boolean = false;
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
  private _questionList: Question[];
  get questionAmount(): number {
    return this._questionList.length;
  }
}
