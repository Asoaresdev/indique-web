import React from "react";
import { useStyles } from "./style";
import { Grid, Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { LoginForm } from "./LoginForm";
import { goToHome } from "../../Routes/coordinators";

export default function LoginPage() {
  const classes = useStyles();
  const history = useHistory();

  const handleClickHome = () => {
    goToHome(history);
  };

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
          Esqueceu sua senha?{" "}
          <Button variant="text" className={classes.homeButton}>
            Clique aqui!
          </Button>
        </Typography>
        <Typography component="p" variant="caption" align="center">
          Ainda não possui uma conta?{" "}
          <Button
            variant="text"
            onClick={handleClickHome}
            className={classes.homeButton}
          >
            Escolha a opção que mais combina com você :)
          </Button>
        </Typography>
      </Grid>
    </Grid>
  );
}
