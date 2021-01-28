import { render } from "@testing-library/react";

import CarsResults from "./CarsResults";

import testIfComponentRender from "../../utils/testIfComponentRender";

describe("CarsResults", () => {
  it("should render", () => {
    expect(
      testIfComponentRender(<CarsResults cars={[]} />, render)
    ).toBeTruthy();
  });
});
