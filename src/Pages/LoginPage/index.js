import React from "react";
import { useStyles } from "./style";
import { Grid, Typography } from "@material-ui/core";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={10} md={8} lg={4}>
        <Typography
          className={classes.areaLogin}
          component="p"
          variant="h4"
          align="center"
          color="primary"
        >
          Área de login
        </Typography>
        <LoginForm />
        <Typography component="p" variant="caption" align="center">
          Esqueceu sua senha? Clique aqui!
        </Typography>
        <Typography component="p" variant="caption" align="center">
          Ainda não possui uma conta? Escolha a opção que mais combina com você
          :)
        </Typography>
      </Grid>
    </Grid>
  );
}
