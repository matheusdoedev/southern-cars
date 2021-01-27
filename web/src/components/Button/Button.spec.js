import { render } from "@testing-library/react";

import Button from "./Button";

import testIfComponentRender from "../../utils/testIfComponentRender";

describe("Button", () => {
  it("should render", () => {
    expect(testIfComponentRender(<Button />, render)).toBeTruthy();
  });
});
