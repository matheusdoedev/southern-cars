import { render } from "@testing-library/react";

import ModalForm from "./ModalForm";

import testIfComponentRender from "../../utils/testIfComponentRender";

describe("ModalForm", () => {
  it("should render", () => {
    expect(testIfComponentRender(<ModalForm />, render)).toBeTruthy();
  });
});
