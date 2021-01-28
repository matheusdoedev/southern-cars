import { render } from "@testing-library/react";

import CarsFilter from "./CarsFilter";

import testIfComponentRender from "../../utils/testIfComponentRender";

describe("CarsFilter", () => {
  it("should render", () => {
    expect(testIfComponentRender(<CarsFilter />, render)).toBeTruthy();
  });
});
