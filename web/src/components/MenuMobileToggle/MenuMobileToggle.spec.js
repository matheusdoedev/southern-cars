import { render } from "@testing-library/react";

import MenuMobileToggle from "./MenuMobileToggle";

import testIfComponentRender from "../../utils/testIfComponentRender";

describe("MenuMobileToggle", () => {
  it("should render", () => {
    expect(testIfComponentRender(<MenuMobileToggle />, render)).toBeTruthy();
  });
});
