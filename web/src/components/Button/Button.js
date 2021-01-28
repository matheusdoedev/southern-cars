import React from "react";
import PropTypes from "prop-types";

import "./Button.styles.scss";

const Button = ({ content, icon, secondary, ...props }) => {
  return (
    <button className={secondary ? `button secondary` : `button`} {...props}>
      {icon && <img src={icon} alt="Adicionar" />}
      {content}
    </button>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.string,
  secondary: PropTypes.bool,
};

export default Button;
