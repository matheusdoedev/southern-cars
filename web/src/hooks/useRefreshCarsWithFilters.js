import { useEffect } from "react";

import useRefreshCars from "./useRefreshCars";

const useRefreshCarsWithFilters = (carsContext) => {
  const { setRefreshCars } = useRefreshCars();

  //  refresh cars with the change of filters
  useEffect(() => {
    carsContext?.handleGetCarsByFilters(() => {
      setRefreshCars();
    });
  }, [
    carsContext?.nameFilter,
    carsContext?.manufacturerFilter,
    carsContext?.colorFilter,
  ]);
};

export default useRefreshCarsWithFilters;
