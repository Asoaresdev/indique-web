import React, { useContext } from "react";
import { Grid, Typography, Badge } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../Global/GlobalStateContext";

import { SignUpForm } from "./SignUpForm";
import { ExperienceForm } from "./ExperienceForm";
import { useStyles } from "./style";

export default function SelectPage() {
  const classes = useStyles();
  const history = useHistory();
  const { states, setters } = useContext(GlobalStateContext);
  const handleClickEnviar = () => {};

  const getStep = () => {
    return (states.candidato.email && 2) || 1;
  };

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.signUp} xs={12} sm={6}>
        <Grid container className={classes.containerForm}>
          <Grid item xs={12}>
            <Typography className={classes.opcao} component="p" variant="h5">
              Vamos começar a sua trilha!
            </Typography>
            <Typography
              className={classes.stepNumber}
              component="label"
              variant="h5"
            >
              {getStep()}.
            </Typography>
            <Typography className={classes.step} component="label" variant="h5">
              {(getStep() === 1 && "Cadastro") || "Suas Habilidades"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {getStep() === 2 && <ExperienceForm />}
            {getStep() === 1 && <SignUpForm />}
          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.gridApresentacao} item xs={false} sm={6}></Grid>
    </Grid>
  );
}
