import { shallow } from "enzyme";

import CarResult from "./CarResult";

import testIfComponentRender from "../../utils/testIfComponentRender";

describe("CarResult", () => {
  it("should render", () => {
    expect(testIfComponentRender(<CarResult />, shallow)).toBeTruthy();
  });
});
