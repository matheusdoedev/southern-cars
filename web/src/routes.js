import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Index from "./pages/Index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
