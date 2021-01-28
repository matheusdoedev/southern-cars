import React from "react";
import { Container, Grid } from "@material-ui/core";

import CarsFilter from "../CarsFilter/CarsFilter";

import "./CarsHead.styles.scss";

const CarsHead = () => {
  return (
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
  );
};

export default CarsHead;
