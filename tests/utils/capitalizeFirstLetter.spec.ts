import { expect } from "vitest";
import capitalizeFirstLetter from "~/utils/capitalizeFirstLetter";
describe("capitalizeFirstLetter", () => {
  test("", () => {
    const text = capitalizeFirstLetter("text");
    expect(text).toEqual("Text");
  });

  test("if the whole text is uppercase", () => {
    const text = capitalizeFirstLetter("TEXT");
    expect(text).toEqual("Text");
  });
});
