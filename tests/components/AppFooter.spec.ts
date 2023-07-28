import { expect } from "vitest";
import { mount } from "@vue/test-utils";
import AppFooter from "~/components/AppFooter.vue";
describe("AppFooter", () => {
  it("Mounted correctly", () => {
    const wrapper = mount(AppFooter);
    expect(wrapper.element).toMatchSnapshot();
  });
});
