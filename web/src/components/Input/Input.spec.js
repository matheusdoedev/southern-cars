import { render } from "@testing-library/react";

import Input from "./Input";

import testIfComponentRender from "../../utils/testIfComponentRender";

describe("Input", () => {
  it("should render", () => {
    expect(
      testIfComponentRender(
        <Input name="Test" value="Test" setValue={() => {}} />,
        render
      )
    ).toBeTruthy();
  });
});
