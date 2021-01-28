import { shallow } from "enzyme";

import testIfComponentRender from "../utils/testIfComponentRender";

describe("test if a component render", () => {
  it("should return true if is rendering", () => {
    const Foo = () => <h1>Hello World</h1>;

    expect(testIfComponentRender(<Foo />, shallow)).toBeTruthy();
  });
});
