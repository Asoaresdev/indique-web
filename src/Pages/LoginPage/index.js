import React from "react";
// import FormLogin from "../../Components/FormLogin";
import { useStyles } from "./style";
import { Grid, Typography } from "@material-ui/core";
// import { LoginForm } from './LoginForm'

export default function LoginPage() {
  const classes = useStyles();
  return ( 
    <Grid container className={classes.root}>
      <Grid item className={classes.signUp} xs={12} sm={6}>
        <Grid container className={classes.containerForm}>
          <Grid item xs={12}>
            <Typography className={classes.opcao} component="p" variant="h5">
              Área de login
          </Typography>
          </Grid>
          <Grid item xs={12}>
            {/* <LoginForm /> */}
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.gridApresentacao} item xs={false} sm={6}></Grid>
    </Grid>
  )
}
