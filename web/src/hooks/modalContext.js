import React, { createContext, useState, useEffect } from "react";

export const ModalContext = createContext();

export const ModalContextComponent = ({ children }) => {
  // state to control modals activity
  const [status, setStatus] = useState(false);
  // state to control which modal is active
  const [currentModal, setCurrentModal] = useState("");

  // to turn on a modal
  const handleActive = (modal) => {
    handleInactive();

    setCurrentModal(modal);
    setStatus(true);
  };

  // to turn off all modals
  const handleInactive = () => {
    if (status) {
      setStatus(false);
    }
  };

  useEffect(() => {
    // getting elements
    const modals = document.querySelectorAll(`[data-modal]`);
    const modal = document.querySelector(`[data-modal="${currentModal}"]`);
    const body = document.querySelector(`[data-modal="body"]`);

    // funtion to turn off all modals
    const clearModals = () => {
      modals.forEach((modal) => {
        modal?.classList.remove("active");
      });
    };

    if (status === true) {
      // if modal state is active, the clearModals will be executed and the active class will be added to current modal and modal class to the body of the page
      clearModals();
      modal?.classList.add("active");
      body?.classList.add("modal");
    } else {
      // else, the clearModals will be executed, the modal class will be removed from page body and current modal set to empty string (no one active).
      clearModals();
      body?.classList.remove("modal");
      setCurrentModal("");
    }
  }, [status, currentModal]);

  return (
    <ModalContext.Provider value={{ handleActive, handleInactive }}>
      {children}
    </ModalContext.Provider>
  );
};
