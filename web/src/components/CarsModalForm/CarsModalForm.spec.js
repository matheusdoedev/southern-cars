import { render } from "@testing-library/react";

import CarsModalForm from "./CarsModalForm";

import testIfComponentRender from "../../utils/testIfComponentRender";

describe("CarsModalForm", () => {
  it("should render", () => {
    expect(testIfComponentRender(<CarsModalForm />, render)).toBeTruthy();
  });
});
