import Quiz from "../../src/types/Quiz";
import createValidationError from "./createCustomError";

function checkIfExist(quiz: Quiz, field: "category" | "name" | "description") {
  if (!quiz[field] || quiz[field].trim() === "") {
    createValidationError(field);
  }
}

function checkIfExistQuestion(
  quiz: Quiz,
  field: "title" | "image" | "correctOption",
  index: number
) {
  if (
    !quiz.questionList[index][field] ||
    quiz.questionList[index][field].trim() === ""
  ) {
    createValidationError(field);
  }
}
export default (quiz: Quiz) => {
  checkIfExist(quiz, "name");
  checkIfExist(quiz, "category");
  checkIfExist(quiz, "description");

  if (!Array.isArray(quiz.questionList) || quiz.questionList.length < 1) {
    createValidationError(
      "",
      "questionList must exist and be array of min 1 element"
    );
  }

  quiz.questionList.forEach((question, index) => {
    if (!question.options || question.options.length !== 4) {
      createValidationError(
        "",
        "options must exist and be array of 4 non empty strings"
      );
    }
    checkIfExistQuestion(quiz, "title", index);
    checkIfExistQuestion(quiz, "image", index);
    checkIfExistQuestion(quiz, "correctOption", index);

    if (!question.options.includes(question.correctOption)) {
      createValidationError("", "correctOption must be in options");
    }
  });
};
