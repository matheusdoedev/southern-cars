export default async function useGetCar(carDataDispatch) {
  async function handleGetCar(carId) {
    await api("GET", `/cars/${carId}`).then((r) => {
      setName(r.name);
      setManufacturer(r.manufacturer);
      setColor(r.color);
      setPrice(r.price);
      setQTY(r.qty);
    });

    return { handleGetCar };
  }
}
