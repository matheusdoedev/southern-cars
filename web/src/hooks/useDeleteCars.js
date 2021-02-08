import api from "../services/api";

export default async function useDeleteCars() {
  async function handleDeleteCar(carId, callback) {
    await api("DELETE", `/cars/${carId}`).then((r) => callback(r));
  }

  return { handleDeleteCar };
}
