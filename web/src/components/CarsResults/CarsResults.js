import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";

import CarResult from "../CarResult/CarResult";
import Button from "../Button/Button";

import plusIcon from "../../assets/plus.svg";

import { ModalContext } from "../../hooks/modalContext";
import { CarsContext } from "../../hooks/carsContext";

import resetDataStates from "../../utils/resetDataStates";

import "./CarsResults.styles.scss";

const CarsResults = ({ cars }) => {
  const modalContext = useContext(ModalContext);
  const carsContext = useContext(CarsContext);

  const history = useHistory();

  return (
    <section title="Cars search results" className="cars-results">
      <Container>
        <Grid container spacing={2} justify="center">
          <Grid
            item
            container
            xs={12}
            alignItems="center"
            style={{ flexDirection: "column" }}
          >
            <h2 className="cars-results-title">Search Results</h2>
          </Grid>
          <Grid item container xs={12}>
            <ul className="cars-results-wrapper">
              {cars ? (
                cars.map((car) => (
                  <CarResult
                    id={car.id}
                    name={car.name}
                    manufacturer={car.manufacturer}
                    color={car.color}
                    price={car.price}
                    qty={car.qty}
                  />
                ))
              ) : (
                <h2>Cars not found</h2>
              )}
            </ul>
          </Grid>
          <Grid
            item
            container
            xs={12}
            justify="flex-end"
            style={{ marginTop: "var(--gap-sm)" }}
          >
            <Button
              content="Add car"
              className="button add-car-button"
              icon={plusIcon}
              onClick={() => {
                resetDataStates([
                  carsContext.setName,
                  carsContext.setPrice,
                  carsContext.setManufacturer,
                  carsContext.setQTY,
                  carsContext.setColor,
                ]);
                modalContext.handleActive("add-car");
                history.push("/cars/add");
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default CarsResults;
