import Question from "~/types/Question";

export default function convertImage(image: Blob, question: Question) {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(image);
  fileReader.onload = () => (question.image = String(fileReader.result));
}
