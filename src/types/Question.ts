import Option from "~/types/Option";

export default class Question {
  get options(): Option[] {
    return this._options;
  }

  set options(value: Option[]) {
    this._options = value;
  }
  private _options: Option[];
  constructor(options: Option[]) {
    this._options = options;
  }
}
