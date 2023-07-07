import Quiz from "../../src/types/Quiz";
import createValidationError from "./createCustomError";

export default (quiz: Quiz) => {
  isFieldEmpty(quiz, "name");
  isFieldEmpty(quiz, "category");
  isFieldEmpty(quiz, "description");
  isQuestionListArray(quiz);
  checkQuestionListStructure(quiz);
};
function isFieldEmpty(quiz: Quiz, field: "category" | "name" | "description") {
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

function isQuestionListArray(quiz: Quiz) {
  if (!Array.isArray(quiz.questionList) || quiz.questionList.length < 1) {
    createValidationError(
      "",
      "questionList must exist and be array of min 1 element"
    );
  }
}

function checkQuestionListStructure(quiz: Quiz) {
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
}
