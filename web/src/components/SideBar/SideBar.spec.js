import { shallow } from "enzyme";

import { Link } from "react-router-dom";

import SideBar from "./SideBar";

import carIcon from "../../assets/car.svg";

import testIfComponentRender from "../../utils/testIfComponentRender";

describe("Brand", () => {
  it("should render", () => {
    expect(testIfComponentRender(<SideBar />, shallow)).toBeTruthy();
  });

  it("should contais dashboard navigation", () => {
    const sideBar = shallow(<SideBar />);

    expect(
      sideBar.contains(
        <nav className="sidebar-nav">
          <ul className="sidebar-nav-menu">
            <li className="sidebar-nav-item">
              <Link to="/" className="sidebar-nav-link">
                <img
                  src={carIcon}
                  alt="Cars"
                  className="sidebar-nav-link-img"
                />
              </Link>
            </li>
          </ul>
        </nav>
      )
    );
  });
});
