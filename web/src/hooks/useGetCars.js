import { useReducer, useState } from "react";

import carsFiltersReducer from "../reducers/carsFiltersReducer";

import api from "../services/api";

export default function useGetCars() {
  const [cars, setCars] = useState([]);

  const [carsFilters, carsFiltersDispatch] = useReducer(carsFiltersReducer, {
    nameFilter: "",
    manufacturerFilter: "",
    colorFilter: "",
  });

  async function handleGetCarsByFilters(callback) {
    await api(
      "GET",
      `/cars?name=${carsFilters.nameFilter}&manufacturer=${carsFilters.manufacturerFilter}&color=${carsFilters.colorFilter}&priceRange=${carsFilters.priceRange}`
    ).then((r) => {
      setCars(r.cars);
      callback && callback(r);
    });
  }

  return { handleGetCarsByFilters, carsFiltersDispatch, cars };
}
