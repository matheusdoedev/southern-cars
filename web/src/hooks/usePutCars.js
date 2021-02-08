import api from "../services/api";

export default async function usePutCars(carData) {
  async function handlePutUpdateCar(carId, callback) {
    await api("PUT", `/cars/${carId}`, carData).then((r) => callback(r));
  }

  return { handlePutUpdateCar };
}
