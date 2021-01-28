import { render } from "@testing-library/react";

import Seo from "./Seo";

import testIfComponentRender from "../../utils/testIfComponentRender";

describe("Seo", () => {
  it("should render", () => {
    expect(testIfComponentRender(<Seo title="Test" />, render)).toBeTruthy();
  });
});
