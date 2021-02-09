import React from "react";
import { Link } from "react-router-dom";

import brandImg from "../../assets/brand.svg";

import "./Brand.styles.scss";

export default function Brand() {
  return (
    <Link to="/" className="brand">
      <img src={brandImg} alt="Southern Cars" />
    </Link>
  );
}
