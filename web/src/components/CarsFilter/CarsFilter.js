import React, { useContext } from "react";

import Input from "../Input/Input";
import Select from "../Select/Select";

import { CarsContext } from "../../contexts/CarsContextProvider";

import useRefreshCarsWithFilters from "../../hooks/useRefreshCarsWithFilters";

import "./CarsFilter.styles.scss";

export default function CarsFilter() {
  const carsContext = useContext(CarsContext);

  useRefreshCarsWithFilters(carsContext);

  return (
    <section title="Cars Filters" className="cars-filters-container">
      <Input
        name="Car name"
        placeholder="Filter cars by name"
        value={carsContext?.carsFilters.nameFilter}
        onChange={(event) =>
          carsContext.carsFiltersDispatch({
            type: "SET_FILTER",
            carFilter: "nameFilter",
            content: event.target.value,
          })
        }
      />
      <Select
        label="Manufacturer"
        name="manufacturer"
        value={carsContext?.carsFilters.manufacturerFilter}
        onChange={(event) =>
          carsContext.carsFiltersDispatch({
            type: "SET_FILTER",
            carFilter: "manufacturerFilter",
            content: event.target.value,
          })
        }
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
        value={carsContext?.carsFilters.colorFilter}
        onChange={(event) =>
          carsContext.carsFiltersDispatch({
            type: "SET_FILTER",
            carFilter: "colorFilter",
            content: event.target.value,
          })
        }
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
}
