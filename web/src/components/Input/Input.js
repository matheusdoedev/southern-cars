import React from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";

function Input({ value, name, setValue, ...props }) {
  return (
    <TextField
      id={name}
      label={name}
      variant="filled"
      onChange={(event) => setValue(event.target.value)}
      value={value}
      required
      {...props}
    />
  );
}

Input.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string.isRequired,
  setValue: PropTypes.func,
};

export default Input;
