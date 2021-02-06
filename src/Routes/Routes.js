import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InitialScreen from "../Pages/InitialScreen";
import SelectPage from "../Pages/SelectPage";
import CandidatePage from "../Pages/CandidatePage";
import CompanyPage from "../Pages/CompanyPage";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <InitialScreen />
        </Route>
        <Route exact path="/select">
          <SelectPage />
        </Route>

        <Route exact path="/candidate">
          <CandidatePage />
        </Route>

        <Route exact path="/company">
          <CompanyPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
