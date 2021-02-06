import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SelectPage from "../Pages/SelectPage";
import CandidatePage from "../Pages/CandidatePage";
import CompanyPage from "../Pages/CompanyPage";
import { useHistory } from "react-router-dom";

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
      </Switch>
    </BrowserRouter>
  );
}
