import React from "react";
import { Grid, Card } from "@material-ui/core";

import HomeWork from "../../../assets/homework.svg";

import { useStyles } from "./style";

export default function CardCultural() {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={3} component={Card} className={classes.card}>
      <img src={HomeWork} width="40" className={classes.img} alt="HomeWork" />
      Cultura da empresa
    </Grid>
  );
}
