import { shallow } from "enzyme";

import DashboardLayout from "./DashboardLayout";

import testIfComponentRender from "../../utils/testIfComponentRender";

describe("Dashboard layout", () => {
  it("should render", () => {
    expect(testIfComponentRender(<DashboardLayout />, shallow)).toBeTruthy();
  });
});
