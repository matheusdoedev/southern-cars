import React from "react";
import PropTypes from "prop-types";

import "./Modal.styles.scss";

const Modal = ({ title, children, name }) => {
  return (
    <section className="modal-block" title={title} data-modal={name}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Modal.porpTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Modal;
