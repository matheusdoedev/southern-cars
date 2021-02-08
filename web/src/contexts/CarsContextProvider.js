import React, { createContext, useReducer } from "react";

import carDataReducer from "../reducers/carDataReducer";

import usePostCars from "../hooks/usePostCars";
import usePutCars from "../hooks/usePutCars";
import useDeleteCars from "../hooks/useDeleteCars";
import useGetCar from "../hooks/useGetCar";

export const CarsContext = createContext();

export function CarsContextProvider({ children }) {
  const [carData, carDataDispatch] = useReducer(carDataReducer, {
    name: "",
    manufacturer: "",
    color: "",
    price: "",
    qty: "",
  });

  const carsContext = {
    ...usePostCars(carData),
    ...usePutCars(carData),
    ...useDeleteCars(),
    ...useGetCar(carDataDispatch),
  };

  return (
    <CarsContext.Provider value={carsContext}>{children}</CarsContext.Provider>
  );
}
