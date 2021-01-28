import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";

import pencilIcon from "../../assets/pencil.svg";
import trashIcon from "../../assets/trash.svg";

import { ModalContext } from "../../hooks/modalContext";
import { CarsContext } from "../../hooks/carsContext";

import "./CarResult.styles.scss";

const CarResult = ({ id, name, manufacturer, color, qty, price }) => {
  const modalContext = useContext(ModalContext);
  const carsContext = useContext(CarsContext);

  const history = useHistory();

  return (
    <li className="car-result-cell">
      <p>{id}</p>
      <p>{name}</p>
      <p>{manufacturer}</p>
      <p>{color}</p>
      <p>{qty}</p>
      <p>${price}</p>
      <div className="car-result-buttons">
        <a
          className="car-result-button"
          onClick={() => {
            carsContext.handleGetCar(id);
            modalContext.handleActive("update-car");
            history.push(`/cars/${id}`);
          }}
        >
          <img src={pencilIcon} alt="Editar" />
        </a>
        <a
          className="car-result-button"
          onClick={() => {
            modalContext.handleActive("delete-car");
            history.push(`/cars/${id}`);
          }}
        >
          <img src={trashIcon} alt="Deletar" />
        </a>
      </div>
    </li>
  );
};

CarResult.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  manufacturer: PropTypes.string,
  color: PropTypes.string,
  qty: PropTypes.number,
  price: PropTypes.number,
};

export default CarResult;
