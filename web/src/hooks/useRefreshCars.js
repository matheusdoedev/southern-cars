import { useContext, useEffect, useState } from "react";

import { CarsContext } from "../contexts/CarsContextProvider";

export default function useRefreshCars() {
  // refresh cars trigger
  const [refreshCars, setRefreshCars] = useState(true);

  const carsContext = useContext(CarsContext);

  useEffect(() => {
    if (refreshCars) {
      carsContext?.handleGetCars(() => {
        setRefreshCars(false);
      });
    }
  }, [refreshCars]);

  return { setRefreshCars };
}
