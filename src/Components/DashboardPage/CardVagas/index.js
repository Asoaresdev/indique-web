import React from "react";
import { Grid, Card } from "@material-ui/core";

import Recruitment from "../../../assets/recruitment.svg";

import { useStyles } from "./style";

export default function CardVagas() {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={3} component={Card} className={classes.card}>
      <img
        src={Recruitment}
        width="40"
        className={classes.img}
        alt="homework"
      />
      Minhas Vagas
    </Grid>
  );
}
