import React, { createContext, useState } from "react";

import api from "../services/api";

export const CarsContext = createContext();

export const CarsContextComponent = ({ children }) => {
  const [cars, setCars] = useState([]);

  // car data states
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQTY] = useState("");

  // search filters
  const [nameFilter, setNameFilter] = useState("");
  const [manufacturerFilter, setManufacturerFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");

  const handleGetCars = async () => {
    await api("GET", "/cars").then((r) => setCars(r.cars));
  };

  const handlePostCars = async (callback) => {
    await api("POST", "/cars", {
      name,
      manufacturer,
      color,
      price,
      qty,
    }).then((r) => callback(r));
  };

  const handlePutUpdateCar = async (carId, callback) => {
    await api("PUT", `/cars/${carId}`, {
      name,
      manufacturer,
      color,
      price,
      qty,
    }).then((r) => callback(r));
  };

  const handleGetCar = async (carId) => {
    await api("GET", `/cars/${carId}`).then((r) => {
      setName(r.name);
      setManufacturer(r.manufacturer);
      setColor(r.color);
      setPrice(r.price);
      setQTY(r.qty);
    });
  };

  const handleGetCarsByFilters = async (callback) => {
    await api(
      "GET",
      `/cars?name=${nameFilter}&manufacturer=${manufacturerFilter}&color=${colorFilter}&priceRange=${priceRange}`
    ).then((r) => {
      setCars(r.cars);
      callback(r);
    });
  };

  const handleDeleteCar = async (carId, callback) => {
    await api("DELETE", `/cars/${carId}`).then((r) => callback(r));
  };

  return (
    <CarsContext.Provider
      value={{
        handleGetCars,
        handleGetCar,
        handleGetCarsByFilters,
        handlePostCars,
        handlePutUpdateCar,
        handleDeleteCar,
        cars,
        name,
        manufacturer,
        color,
        price,
        qty,
        nameFilter,
        manufacturerFilter,
        colorFilter,
        setNameFilter,
        setManufacturerFilter,
        setColorFilter,
        setCars,
        setName,
        setManufacturer,
        setColor,
        setPrice,
        setQTY,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};
