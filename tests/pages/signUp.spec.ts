import { expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";

describe.skip("example", async () => {
  await setup({
    server: true,
    port: 3000,
  });
  it("Renders Hello Nuxt", async () => {
    const page = await $fetch("/");
    expect(page).toMatchSnapshot();
  });
});
