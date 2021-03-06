import React from "react";
import PropTypes from "prop-types";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import SelectInput from "@material-ui/core/Select";

function Select({ name, value, setValue, label, options, ...props }) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl variant="filled">
      <InputLabel id={name}>{label}</InputLabel>
      <SelectInput
        labelId=""
        defaultValue=""
        id={name}
        value={value}
        onChange={handleChange}
        {...props}
      >
        <MenuItem value="">Select a option</MenuItem>
        {options?.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </SelectInput>
    </FormControl>
  );
}

Select.prototype = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default Select;
