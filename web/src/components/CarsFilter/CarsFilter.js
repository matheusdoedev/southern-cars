import React, { useContext, useEffect } from "react";

import Input from "../Input/Input";
import Select from "../Select/Select";

import { CarsContext } from "../../hooks/carsContext";

import useRefreshCars from "../../hooks/useRefreshCars";

import "./CarsFilter.styles.scss";

const CarsFilter = () => {
  const carsContext = useContext(CarsContext);

  const { setRefreshCars } = useRefreshCars();

  useEffect(() => {
    carsContext.handleGetCarsByFilters(() => {
      setRefreshCars();
    });
  }, [
    carsContext.nameFilter,
    carsContext.manufacturerFilter,
    carsContext.colorFilter,
  ]);

  return (
    <section title="Cars Filters" className="cars-filters-container">
      <Input
        name="Car name"
        placeholder="Filter cars by name"
        value={carsContext.nameFilter}
        setValue={carsContext.setNameFilter}
      />
      <Select
        label="Manufacturer"
        name="manufacturer"
        value={carsContext.manufacturerFilter}
        setValue={carsContext.setManufacturerFilter}
        options={[
          { value: "Ford", label: "Ford" },
          { value: "Mazda", label: "Mazda" },
          { value: "Renault", label: "Renault" },
        ]}
      />
      <Select
        label="Color"
        defaultValue=""
        name="color"
        value={carsContext.colorFilter}
        setValue={carsContext.setColorFilter}
        options={[
          { value: "Black", label: "Black" },
          { value: "Blue", label: "Blue" },
          { value: "Red", label: "Red" },
          { value: "Yellow", label: "Yellow" },
        ]}
      />
      <Select
        label="Price range"
        defaultValue=""
        name="priceRange"
        options={[
          { value: "$0 to $20.000,00", label: "$0 to $20.000,00" },
          {
            value: "$20.000,01 to $50.000,00",
            label: "$20.000,01 to $50.000,00",
          },
          {
            value: "$50.000,01 to $125.000,00",
            label: "$50.000,01 to $125.000,00",
          },
        ]}
      />
    </section>
  );
};

export default CarsFilter;
