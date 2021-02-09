import React from "react";

import Routes from "./routes";
import { ModalContextProvider } from "./contexts/ModalContextProvider";
import { CarsContextProvider } from "./contexts/CarsContextProvider";

import "./App.scss";

export default function App() {
  return (
    <ModalContextProvider>
      <CarsContextProvider>
        <Routes />
      </CarsContextProvider>
    </ModalContextProvider>
  );
}
