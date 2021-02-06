import React from "react";
import GlobalStateContext from "../Global/GlobalStateContext";
import { useState, useEffect } from "react";

export default function GlobalState(props) {
  const [candidato, setCandidato] = useState({});
  const [mentor, setMentor] = useState({});
  const [company, setCompany] = useState([]);
  // const [token, setToken] = useState("")

  const states = {
    candidato,
    mentor,
    company,
  };

  const setters = {
    setCandidato,
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
