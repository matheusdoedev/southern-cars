import React, { useContext } from "react";

import Input from "../Input/Input";
import Select from "../Select/Select";

import { CarsContext } from "../../hooks/carsContext";

const CarsModalForm = () => {
  const carsContext = useContext(CarsContext);

  return (
    <>
      <Input
        name="Name"
        value={carsContext.name}
        setValue={carsContext.setName}
        required
      />
      <div className="input-group">
        <Select
          label="Manufacturer"
          defaultValue=""
          value={carsContext.manufacturer}
          setValue={carsContext.setManufacturer}
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
          value={carsContext.color}
          setValue={carsContext.setColor}
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
          value={carsContext.price}
          setValue={carsContext.setPrice}
          required
        />
        <Input
          name="Quantity"
          value={carsContext.qty}
          setValue={carsContext.setQTY}
          required
        />
      </div>
    </>
  );
};

export default CarsModalForm;
