import { shallow } from "enzyme";

import Select from "./Select";

import testIfComponentRender from "../../utils/testIfComponentRender";

describe("Select", () => {
  it("should render", () => {
    expect(testIfComponentRender(<Select />, shallow)).toBeTruthy();
  });
});
