export default function carsFiltersReducer(state, action) {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, [action.carFilter]: action.content };
    default:
      return new Error();
  }
}
