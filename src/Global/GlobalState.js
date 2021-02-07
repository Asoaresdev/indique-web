import React from "react";
import GlobalStateContext from "../Global/GlobalStateContext";
import { useState, useEffect } from "react";

export default function GlobalState(props) {
  const [candidate, setCandidate] = useState({});
  const [mentor, setMentor] = useState({});
  const [company, setCompany] = useState([]);
  // const [token, setToken] = useState("")

  const states = {
    candidate,
    mentor,
    company,
  };

  const setters = {
    setCandidate,
    setMentor,
    setCompany,
  };
  const requests = {};

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
}
