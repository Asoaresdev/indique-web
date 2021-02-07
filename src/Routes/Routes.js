import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SelectPage from "../Pages/SelectPage";
import CandidatePage from "../Pages/CandidatePage";
import CompanyPage from "../Pages/CompanyPage";
import MentorPage from "../Pages/MentorPage";
import DashboardPage from "../Pages/DashboardPage";
import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
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
        <Route exact path="/mentor">
          <MentorPage />
        </Route>
        <Route exact path="/dashboard">
          <DashboardPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
