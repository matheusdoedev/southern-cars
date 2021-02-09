import React, { useContext } from "react";

import Input from "../Input/Input";
import Select from "../Select/Select";

import { CarsContext } from "../../contexts/CarsContextProvider";

export default function CarsModalForm() {
  const carsContext = useContext(CarsContext);

  return (
    <>
      <Input
        name="Name"
        value={carsContext?.carData.name}
        onChange={(event) =>
          carsContext?.carDataDispatch({
            type: "SET_DATA",
            carData: "name",
            content: event.target.value,
          })
        }
        required
      />
      <div className="input-group">
        <Select
          label="Manufacturer"
          defaultValue=""
          value={carsContext?.carData.manufacturer}
          onChange={(event) =>
            carsContext?.carDataDispatch({
              type: "SET_DATA",
              carData: "manufacturer",
              content: event.target.value,
            })
          }
          name="manufacturer"
          required
          options={[
            { value: "Ford", label: "Ford" },
            { value: "Mazda", label: "Mazda" },
            { value: "Renault", label: "Renault" },
          ]}
        />
        <Select
          label="Color"
          defaultValue=""
          value={carsContext?.carData.color}
          onChange={(event) =>
            carsContext?.carDataDispatch({
              type: "SET_DATA",
              carData: "color",
              content: event.target.value,
            })
          }
          name="color"
          required
          options={[
            { value: "Black", label: "Black" },
            { value: "Blue", label: "Blue" },
            { value: "Red", label: "Red" },
            { value: "Yellow", label: "Yellow" },
          ]}
        />
      </div>
      <div className="input-group">
        <Input
          name="Price"
          value={carsContext?.carData.price}
          onChange={(event) =>
            carsContext?.carDataDispatch({
              type: "SET_DATA",
              carData: "price",
              content: event.target.value,
            })
          }
          required
        />
        <Input
          name="Quantity"
          value={carsContext?.carData.qty}
          onChange={(event) =>
            carsContext?.carDataDispatch({
              type: "SET_DATA",
              carData: "qty",
              content: event.target.value,
            })
          }
          required
        />
      </div>
    </>
  );
}
