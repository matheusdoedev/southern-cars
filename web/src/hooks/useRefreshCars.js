import { useContext, useEffect, useState } from "react";

import { CarsContext } from "./carsContext";

const useRefreshCars = () => {
  const [refreshCars, setRefreshCars] = useState(true);

  const carsContext = useContext(CarsContext);

  useEffect(() => {
    if (refreshCars) {
      carsContext.handleGetCars();
      setRefreshCars(false);
    }
  }, [refreshCars]);

  return { setRefreshCars };
};

export default useRefreshCars;
