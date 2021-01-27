import React from "react";

import "./Modal.styles.scss";

const Modal = ({ title, children, name }) => {
  return (
    <section className="modal-block" title={title} data-modal={name}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Modal;
