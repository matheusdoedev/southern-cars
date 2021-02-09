export default function carDataReducer(state, action) {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, [action.carData]: action.content };
    case "SET_CAR_DATA":
      return { ...action.carData };
    case "RESET_DATA":
      return { name: "", manufacturer: "", color: "", price: "", qty: "" };
    default:
      return new Error();
  }
}
