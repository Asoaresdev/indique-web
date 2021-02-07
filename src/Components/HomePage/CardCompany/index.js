import React from "react";
import { Grid, Card, Typography, Button } from "@material-ui/core";
import icone2 from "../../../assets/icone2.png";
import { useStyles } from "./style";
import { useHistory } from "react-router-dom";
import { goToCompany } from "../../../Routes/coordinators";

// import { Container } from './styles';

export default function CardCompany() {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    goToCompany(history);
  };

  return (
    <Grid item xs={10} sm={5} md={2}>
      <Card className={classes.card}>
        <img width="100" src={icone2} alt="icone2" />
        <Typography className={classes.texto}>
          Quero contratar novos talentos para o meu negócio.
        </Typography>
      </Card>
      <Button
        className={classes.botao}
        color="primary"
        variant="contained"
        fullWidth
        onClick={handleClick}
      >
        Quero contratar
      </Button>
    </Grid>
  );
}
