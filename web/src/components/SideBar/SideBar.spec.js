import { shallow } from "enzyme";

import SideBar from "./SideBar";

import testIfComponentRender from "../../utils/testIfComponentRender";

describe("Brand", () => {
  it("should render", () => {
    expect(testIfComponentRender(<SideBar />, shallow)).toBeTruthy();
  });
});
