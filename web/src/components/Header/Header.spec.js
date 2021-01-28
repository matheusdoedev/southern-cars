import { render } from "@testing-library/react";

import Header from "./Header";

import testIfComponentRender from "../../utils/testIfComponentRender";

describe("Header", () => {
  it("should render", () => {
    expect(testIfComponentRender(<Header />, render)).toBeTruthy();
  });
});
