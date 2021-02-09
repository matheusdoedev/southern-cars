export default function modalReducer(state, action) {
  switch (action.type) {
    case "ACTIVE_MODAL":
      return { currentModal: action.modal, status: true };
    case "INACTIVE_MODAL":
      return { status: false, currentModal: "" };
    default:
      return new Error();
  }
}
