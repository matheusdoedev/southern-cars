import { shallow } from "enzyme";

import CarsResults from "./CarsResults";

import testIfComponentRender from "../../utils/testIfComponentRender";

describe("CarsResults", () => {
  it("should render", () => {
    expect(testIfComponentRender(<CarsResults />, shallow)).toBeTruthy();
  });
});
