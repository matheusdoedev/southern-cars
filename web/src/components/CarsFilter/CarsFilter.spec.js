import { shallow } from "enzyme";

import CarsFilter from "./CarsFilter";

import testIfComponentRender from "../../utils/testIfComponentRender";

describe("CarsFilter", () => {
  it("should render", () => {
    expect(testIfComponentRender(<CarsFilter />, shallow)).toBeTruthy();
  });
});
