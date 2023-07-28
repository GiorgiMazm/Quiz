import { expect } from "vitest";
import { mount } from "@vue/test-utils";
import index from "~/pages/index.vue";

describe.skip("My test", async () => {
  it("Mounted correctly", async () => {
    expect(mount(index).element).toMatchSnapshot();
  });
});
