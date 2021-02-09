import { useEffect } from "react";

import useRefreshCars from "./useRefreshCars";

export default function useRefreshCarsWithFilters(carsContext) {
  const { setRefreshCars } = useRefreshCars();

  //  refresh cars with the change of filters
  useEffect(() => {
    carsContext?.handleGetCars(() => {
      setRefreshCars();
    });
  }, [
    carsContext?.carsFilters.nameFilter,
    carsContext?.carsFilters.manufacturerFilter,
    carsContext?.carsFilters.colorFilter,
  ]);
}
