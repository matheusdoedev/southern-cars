import { shallow } from "enzyme";

import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";

import DashboardLayout from "./DashboardLayout";

import testIfComponentRender from "../../utils/testIfComponentRender";

describe("Dashboard layout", () => {
  it("should render", () => {
    expect(testIfComponentRender(<DashboardLayout />, shallow)).toBeTruthy();
  });
});
