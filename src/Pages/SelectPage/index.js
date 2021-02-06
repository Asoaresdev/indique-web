import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";

import FormLogin from "../../Components/FormLogin";
import { useStyles } from "./style";

export default function SelectPage() {
  const classes = useStyles();

  const handleClickIndicado = () => {};
  const handleClickIndicar = () => {};
  const handleClickContratar = () => {};

  return (
    <Grid container className={classes.root}>
      <Grid className={classes.gridApresentacao} item xs={false} sm={6} md={7}>
        <Typography className={classes.titulo} component="p" variant="h3">
          CONTRATE UM
        </Typography>
        <Typography className={classes.titulo} component="p" variant="h3">
          JOVEM APRENDIZ
        </Typography>
        <Typography className={classes.subtitulo} component="p" variant="h5">
          Sua rede de apoio para o
        </Typography>
        <Typography component="p" variant="h5">
          mercado de trabalho.
        </Typography>
      </Grid>
      <Grid item className={classes.containerButtons} xs={12} sm={6} md={5}>
        <Typography className={classes.opcao} component="p" variant="h5">
          Selecione uma opção:
        </Typography>
        <Button
          className={classes.button}
          variant="outlined"
          fullWidth
          onClick={handleClickIndicado}
        >
          Quero ser indicado
        </Button>
        <Button
          className={classes.button}
          variant="outlined"
          fullWidth
          onClick={handleClickIndicar}
        >
          Quero indicar
        </Button>
        <Button
          className={classes.button}
          variant="outlined"
          fullWidth
          onClick={handleClickContratar}
        >
          Quero contratar
        </Button>
      </Grid>
    </Grid>
  );
}
