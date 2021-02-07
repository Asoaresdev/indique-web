import React, { useContext } from "react";
import { Paper, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import GlobalStateContext from "../../../Global/GlobalStateContext";

export default function WelcomeBallon() {
  const { states, setters } = useContext(GlobalStateContext);
  const classes = useStyles();
  const isCandidate = () => {
    return !!states.candidate.email;
  };
  const isCompany = () => {
    return !!states.company.email;
  };
  const isMentor = () => {
    return !!states.mentor.email;
  };

  return (
    <>
      {" "}
      {(isCandidate() || isCompany() || isMentor()) && (
        <Paper className={classes.paper}>
          {isCandidate() && (
            <>
              <Typography>
                Oi, {states.candidate.name}! :) Bem-vindo(a) à sua rede de apoio
                para o mercado de trabalho! Estamos felizes em ver você por
                aqui. Esperamos que você tenha uma experiência incrível nessa
                jornada!
              </Typography>
            </>
          )}
          {isCompany() && (
            <>
              <Typography>
                Oi, {states.company.name}! :) Bem-vindos(as) à nossa rede de
                apoio para o mercado de trabalho, onde você encontrará seus
                próximos colaboradores! Estamos felizes em ver você por aqui e
                por você querer ajudar a abrir oportunidades para futuros
                profisionais!
              </Typography>
            </>
          )}
          {isMentor() && (
            <>
              <Typography>
                Oi, {states.mentor.name}! :) Bem-vindo(a) à sua rede de apoio
                para o mercado de trabalho! Estamos felizes em ver você por aqui
                Esperamos que você tenha uma experiência incrível nessa jornada!
              </Typography>
            </>
          )}
        </Paper>
      )}
    </>
  );
}
