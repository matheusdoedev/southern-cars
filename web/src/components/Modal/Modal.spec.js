import { render } from "@testing-library/react";

import Modal from "./Modal";

import testIfComponentRender from "../../utils/testIfComponentRender";

describe("Modal", () => {
  it("should render", () => {
    expect(
      testIfComponentRender(<Modal title="Test" name="Test" />, render)
    ).toBeTruthy();
  });
});
