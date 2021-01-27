import React from "react";

import TextField from "@material-ui/core/TextField";

const Input = ({ value, name, setValue, ...props }) => {
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
};

export default Input;
