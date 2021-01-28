import React from "react";

import Routes from "./routes";
import { ModalContextComponent } from "./hooks/modalContext";
import { CarsContextComponent } from "./hooks/carsContext";

import "./App.scss";

const App = () => {
  return (
    <ModalContextComponent>
      <CarsContextComponent>
        <Routes />
      </CarsContextComponent>
    </ModalContextComponent>
  );
};

export default App;
