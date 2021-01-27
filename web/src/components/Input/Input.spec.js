import { shallow } from "enzyme";

import Input from "./Input";

import testIfComponentRender from "../../utils/testIfComponentRender";

describe("Input", () => {
  it("should render", () => {
    expect(testIfComponentRender(<Input />, shallow)).toBeTruthy();
  });
});
