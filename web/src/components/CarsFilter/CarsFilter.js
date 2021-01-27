import React, { useContext } from "react";

import Input from "../Input/Input";
import Select from "../Select/Select";

import { CarsContext } from "../../hooks/carsContext";

import "./CarsFilter.styles.scss";

const CarsFilter = () => {
  const carsContext = useContext(CarsContext);

  return (
    <section title="Cars Filters" className="cars-filters-container">
      <Input
        name="Car name"
        placeholder="Search by car name"
        value={carsContext.name}
        onChange={(event) => {
          carsContext.setName(event.target.value);
          carsContext.handleGetCarsByFilters();
        }}
      />
      <Select
        label="Manufacturer"
        defaultValue=""
        name="manufacturer"
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
