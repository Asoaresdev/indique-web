import React from "react";
import { useStyles } from "./style";
import { Button, Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import CardCandidate from "../../Components/HomePage/CardCandidate";
import CardCompany from "../../Components/HomePage/CardCompany";
import CardMentor from "../../Components/HomePage/CardMentor";

import { goToLogin } from "../../Routes/coordinators";

export default function HomePage() {
  const classes = useStyles();
  const history = useHistory();

  const handleClickLogin = () => {
    goToLogin(history);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.header} xs={12}>
        <Grid container className={classes.headerContent}>
          <Grid item className={classes.login} xs={12}>
            <Button
              className={classes.Btlogin}
              variant="contained"
              color="primary"
              onClick={handleClickLogin}
            >
              Login
            </Button>
          </Grid>
          <Grid item className={classes.titulo} xs={12}>
            <Typography variant="h3" color="inherit">
              Somos a sua rede de apoio para o
            </Typography>
            <Typography variant="h3" color="inherit">
              mercado de trabalho.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.content} xs={12}>
        <Grid container justify="space-evenly">
          <CardCandidate />
          <CardCompany />
          <CardMentor />
        </Grid>
      </Grid>
    </Grid>
  );
}
