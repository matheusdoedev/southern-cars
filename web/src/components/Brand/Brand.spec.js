import { shallow } from "enzyme";

import Brand from "./Brand";

import brandImg from "../../assets/brand.svg";

describe("Brand", () => {
  it("should render", () => {
    const brand = shallow(<Brand />);

    expect(brand).toBeTruthy();
  });

  it("should contains the brand", () => {
    const brand = shallow(<Brand />);

    expect(
      brand.contains(<img src={brandImg} alt="Southern Cars" />)
    ).toBeTruthy();
  });
});
