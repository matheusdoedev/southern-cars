import api from "../services/api";

export default function useGetCar(carDataDispatch) {
  async function handleGetCar(carId) {
    await api("GET", `/cars/${carId}`).then((r) => {
      carDataDispatch({ type: "SET_CAR_DATA", carData: r });
    });
  }

  return { handleGetCar };
}
