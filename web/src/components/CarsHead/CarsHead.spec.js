import { render } from "@testing-library/react";

import CarsHead from "./CarsHead";

import testIfComponentRender from "../../utils/testIfComponentRender";

describe("CarsHead", () => {
  it("should render", () => {
    expect(testIfComponentRender(<CarsHead />, render)).toBeTruthy();
  });
});
