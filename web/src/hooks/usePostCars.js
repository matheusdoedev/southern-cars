import api from "../services/api";

export default function usePostCars(carData) {
  async function handlePostCars(callback) {
    await api("POST", "/cars", carData).then((r) => callback(r));
  }

  return { handlePostCars };
}
