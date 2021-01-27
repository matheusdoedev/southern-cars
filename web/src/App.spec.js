import { render } from "@testing-library/react";
import App from "./App";

it("should render app", () => {
  const app = render(<App />);

  expect(app).toBeTruthy();
});
