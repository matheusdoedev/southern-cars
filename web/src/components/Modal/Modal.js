import React from "react";
import PropTypes from "prop-types";

import "./Modal.styles.scss";

function Modal({ title, children, name }) {
  return (
    <section className="modal-block" title={title} data-modal={name}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Modal;
