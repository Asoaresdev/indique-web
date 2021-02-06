import React from "react";
import { Grid, Typography } from "@material-ui/core";

import FormLogin from "../../Components/FormLogin";

export default function SelectPage() {
  return (
    <Grid container>
      <Grid item xs={false} sm={6} md={7}>
        <Typography>Indique um Júnior</Typography>
        <Typography>Sua rede do bem para o mercado de trabalho. </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={5}>
        <FormLogin texto={"Entrar"} />
      </Grid>
    </Grid>
  );
}
