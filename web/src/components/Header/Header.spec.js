import { shallow } from "enzyme";

import { Avatar, Container, Grid } from "@material-ui/core";

import Header from "./Header";

import testIfComponentRender from "../../utils/testIfComponentRender";

describe("Header", () => {
  it("should render", () => {
    expect(testIfComponentRender(<Header />, shallow)).toBeTruthy();
  });

  it("should contains", () => {
    const header = shallow(<Header />);

    expect(
      header.contains(
        <header className="header">
          <Container>
            <Grid item container xs={12} justify="flex-end">
              <div className="header-account">
                <p className="header-account-name">Matheus</p>
                <Avatar alt="Matheus" className="header-account-avatar">
                  M
                </Avatar>
              </div>
            </Grid>
          </Container>
        </header>
      )
    ).toBeTruthy();
  });
});
