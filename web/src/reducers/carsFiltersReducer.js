export default function carsFiltersReducer() {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, [action.carFilter]: action.content };
    default:
      return new Error();
  }
}
