import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../Global/GlobalStateContext";

import { MentorForm } from "./MentorForm";
import { useStyles } from "./style";

export default function CompanyPage() {
  const classes = useStyles();
  const history = useHistory();
  const { states, setters } = useContext(GlobalStateContext);

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.signUp} xs={12} sm={6}>
        <Grid container className={classes.containerForm}>
          <Grid item xs={12}>
            <Typography className={classes.opcao} component="p" variant="h5">
            E ai, beleza? Vamos ao cadastro...
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
            <MentorForm />
          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.gridApresentacao} item xs={false} sm={6}></Grid>
    </Grid>
  );
}