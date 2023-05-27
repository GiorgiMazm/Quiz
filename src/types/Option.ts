export default class Option {
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
  get isRight(): boolean {
    return this._isRight;
  }
  set isRight(_isRight: boolean) {
    this._isRight = _isRight;
  }
  private _title: string;
  private _isRight: boolean;

  constructor(title: string, isRight: boolean) {
    this._isRight = isRight;
    this._title = title;
  }
}
