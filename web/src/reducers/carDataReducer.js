export default function carDataReducer(state, action) {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, [action.carData]: action.content };
    case "SET_CAR_DATA":
      action.
    default:
      return new Error();
  }
}
