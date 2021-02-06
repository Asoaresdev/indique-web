import React from "react";
import { Grid, Typography, Badge } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { SignUpForm } from "./SignUpForm";
import { useStyles } from "./style";
import {
  goToCandidate,
  goToCompany,
  goToMentor,
} from "../../Routes/coordinators";

export default function SelectPage() {
  const classes = useStyles();
  const history = useHistory();
  const handleClickEnviar = () => {};

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
              1.
            </Typography>
            <Typography className={classes.step} component="label" variant="h5">
              Cadastro
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <SignUpForm />
          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.gridApresentacao} item xs={false} sm={6}></Grid>
    </Grid>
  );
}
