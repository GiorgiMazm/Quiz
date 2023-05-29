export default class Question {
  private _options: string[];
  private _title: string;
  private _image: string;
  private _correctOption: string;
  private readonly _id: number;
  private _isAnswered: boolean = false;
  get isAnswered(): boolean {
    return this._isAnswered;
  }

  set isAnswered(value: boolean) {
    this._isAnswered = value;
  }

  constructor(
    options: string[],
    title: string,
    image: string,
    correctOption: string,
    id: number
  ) {
    this._options = options;
    this._image = image;
    this._correctOption = correctOption;
    this._title = title;
    this._id = id;
  }
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get correctOption(): string {
    return this._correctOption;
  }

  get id(): number {
    return this._id;
  }

  set correctOption(value: string) {
    this._correctOption = value;
  }
  get options(): string[] {
    return this._options;
  }

  set options(value: string[]) {
    this._options = value;
  }
}
