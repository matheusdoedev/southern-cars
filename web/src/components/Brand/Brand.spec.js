import { shallow } from "enzyme";

import Brand from "./Brand";

import brandImg from "../../assets/brand.svg";

describe("Brand", () => {
  const brand = shallow(<Brand />);

  it("should render", () => {
    expect(brand).toBeTruthy();
  });

  it("should render a Link with a image", () => {
    expect(
      brand.contains(<img src={brandImg} alt="Southern Cars" />)
    ).toBeTruthy();
  });
});
