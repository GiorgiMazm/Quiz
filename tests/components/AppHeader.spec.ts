import { expect } from "vitest";
import { mount } from "@vue/test-utils";
import AppHeader from "~/components/AppHeader.vue";
describe("Mounted", () => {
  test("AppHeader", () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.vm).toBeTruthy();
  });
});
