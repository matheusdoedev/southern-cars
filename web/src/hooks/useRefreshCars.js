import { useContext, useEffect, useState } from "react";

import { CarsContext } from "./carsContext";

const useRefreshCars = () => {
  // refresh cars trigger
  const [refreshCars, setRefreshCars] = useState(true);

  const carsContext = useContext(CarsContext);

  useEffect(() => {
    if (refreshCars) {
      carsContext?.handleGetCarsByFilters();
      setRefreshCars(false);
    }
  }, [refreshCars]);

  return { setRefreshCars };
};

export default useRefreshCars;
