import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SelectPage from "../Pages/SelectPage";
import CandidatePage from "../Pages/CandidatePage";
import CompanyPage from "../Pages/CompanyPage";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SelectPage />
        </Route>

        <Route exact path="/candidate">
          <CandidatePage />
        </Route>

        <Route exact path="/company">
          <CompanyPage />
        </Route>
        <Route exact path="/mentor">
          <CompanyPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
