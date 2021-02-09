import { useEffect, useReducer } from "react";

import modalReducer from "../reducers/modalReducer";

export default function useModal() {
  const [modalState, modalDispatch] = useReducer(modalReducer, {
    status: false,
    currentModal: "",
  });

  // to turn off all modals
  function handleInactive() {
    if (modalState.status) {
      modalDispatch({ type: "INACTIVE_MODAL" });
    }
  }

  // to turn on a modal
  function handleActive(modal) {
    handleInactive();

    modalDispatch({ type: "ACTIVE_MODAL", modal });
  }

  useEffect(() => {
    // getting elements
    const modals = document.querySelectorAll(`[data-modal]`);
    const modal = document.querySelector(
      `[data-modal="${modalState.currentModal}"]`
    );
    const body = document.querySelector(`[data-modal="body"]`);

    // funtion to turn off all modals
    function clearModals() {
      modals.forEach((modal) => {
        modal?.classList.remove("active");
      });
    }

    if (modalState.status === true) {
      // if modal state is active, the clearModals will be executed and the active class will be added to current modal and modal class to the body of the page
      clearModals();
      modal?.classList.add("active");
      body?.classList.add("modal");
    } else {
      // else, the clearModals will be executed, the modal class will be removed from page body and current modal set to empty string (no one active).
      clearModals();
      body?.classList.remove("modal");
      modalDispatch({ type: "INACTIVE_MODAL" });
    }
  }, [modalState.status, modalState.currentModal]);

  return { handleActive, handleInactive };
}
