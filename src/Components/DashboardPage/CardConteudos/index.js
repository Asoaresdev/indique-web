import React from "react";
import { Grid, Card } from "@material-ui/core";

import Homework from "../../../assets/homework.svg";

import { useStyles } from "./style";

export default function CardConteudos() {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={3} component={Card} className={classes.card}>
      <img src={Homework} width="40" className={classes.img} alt="homework" />
      Trilhas de conteúdo
    </Grid>
  );
}
