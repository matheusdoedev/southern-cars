import { shallow } from "enzyme";

import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";

import DashboardLayout from "./DashboardLayout";

import testIfComponentRender from "../../utils/testIfComponentRender";

describe("Dashboard layout", () => {
  it("should render", () => {
    expect(testIfComponentRender(<DashboardLayout />, shallow)).toBeTruthy();
  });

  it("should equals", () => {
    const layout = shallow(<DashboardLayout />);

    expect(
      layout.contains(
        <main className="dashboard-layout">
          <SideBar />
          <section className="dashboard-content" title="dashboard-content">
            <Header />
          </section>
        </main>
      )
    ).toBeTruthy();
  });
});
