import React from "react";
import PropTypes from "prop-types";

import "./ModalForm.styles.scss";

const ModalForm = ({ name, children, ...props }) => {
  return (
    <form className="modal-form" id={name} {...props}>
      {children}
    </form>
  );
};

ModalForm.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ModalForm;
