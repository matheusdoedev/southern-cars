import React from "react";

import "./Button.styles.scss";

const Button = ({ content, icon, secondary, ...props }) => {
  return (
    <button className={secondary ? `button secondary` : `button`} {...props}>
      {icon && <img src={icon} alt="Adicionar" />}
      {content}
    </button>
  );
};

export default Button;
