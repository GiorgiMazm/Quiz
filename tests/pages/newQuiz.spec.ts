import { expect } from "vitest";
import newQuiz from "~/pages/newQuiz.vue";
import { mount } from "@vue/test-utils";

describe("My test??", () => {
  it("Mounted correctly", () => {
    const wrapper = mount(newQuiz);
    expect(wrapper.element).toEqual(null);
  });
});
