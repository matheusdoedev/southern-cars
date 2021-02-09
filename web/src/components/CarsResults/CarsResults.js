import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";

import CarResult from "../CarResult/CarResult";
import Button from "../Button/Button";

import plusIcon from "../../assets/plus.svg";

import { ModalContext } from "../../contexts/ModalContextProvider";
import { CarsContext } from "../../contexts/CarsContextProvider";

import "./CarsResults.styles.scss";

function CarsResults({ cars }) {
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
                <h3>Cars not found</h3>
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
                carsContext?.carDataDispatch({ type: "RESET_DATA" });
                modalContext.handleActive("add-car");
                history.push("/cars/add");
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

CarsResults.propTypes = {
  cars: PropTypes.array.isRequired,
};

export default CarsResults;
