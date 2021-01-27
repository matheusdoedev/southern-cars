import React from "react";

import "./ModalForm.styles.scss";

const ModalForm = ({ name, children, ...props }) => {
  return (
    <form className="modal-form" id={name} {...props}>
      {children}
    </form>
  );
};

export default ModalForm;
