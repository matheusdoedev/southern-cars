import { shallow } from "enzyme";

import { Container, Grid } from "@material-ui/core";

import CarsFilter from "../CarsFilter/CarsFilter";
import CarsHead from "./CarsHead";

import testIfComponentRender from "../../utils/testIfComponentRender";

describe("CarsHead", () => {
  it("should render", () => {
    expect(testIfComponentRender(<CarsHead />, shallow)).toBeTruthy();
  });

  it("should contains", () => {
    const carsHead = shallow(<CarsHead />);

    expect(
      carsHead.contains(
        <section title="Cars head" className="cars-head">
          <Container>
            <Grid container spacing={2} justify="center">
              <Grid item container xs={12} justify="center">
                <h1 className="cars-head-title">Cars</h1>
              </Grid>
              <Grid item container xs={12}>
                <CarsFilter />
              </Grid>
            </Grid>
          </Container>
        </section>
      )
    ).toBeTruthy();
  });
});