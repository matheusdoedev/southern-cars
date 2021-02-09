import api from "../services/api";

export default function usePutCars(carData) {
  async function handlePutUpdateCar(carId, callback) {
    await api("PUT", `/cars/${carId}`, carData).then((r) => callback(r));
  }

  return { handlePutUpdateCar };
}
