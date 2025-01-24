import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Input from "../Input.vue";

describe("Testing input.vue", () => {
  test("Is Input Rendering", () => {
    const inputComponent = mount(Input);
    expect(inputComponent).toBeTruthy();
  });

  test("Is input", async () => {
    const inputComponent = mount(Input);
    const inputEl = inputComponent.find("input");
    await inputEl.setValue("hello");

    const span = inputComponent.find("span");
    const spanText = span.text();

    expect(spanText).toBe("hello");
  });
});
