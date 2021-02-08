import React, { createContext } from "react";

import useModal from "../hooks/useModal";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  return (
    <ModalContext.Provider value={{ ...useModal() }}>
      {children}
    </ModalContext.Provider>
  );
};
