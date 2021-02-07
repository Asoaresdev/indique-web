import React from "react";
import { Grid, Card, Typography, Button } from "@material-ui/core";
import icone3 from "../../../assets/icone3.png";
import { useStyles } from "./style";
import { useHistory } from "react-router-dom";
import { goToCandidate } from "../../../Routes/coordinators";

// import { Container } from './styles';

export default function CardCandidate() {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    goToCandidate(history);
  };
  return (
    <Grid item xs={10} sm={5} md={2}>
      <Card className={classes.card}>
        <img width="100" src={icone3} alt="icone3" />
        <Typography className={classes.texto}>
          Estou em busca da minha primeira experiência no mercado de trabalho.
        </Typography>
      </Card>
      <Button
        className={classes.botao}
        color="primary"
        variant="contained"
        fullWidth
        onClick={handleClick}
      >
        Quero ser indicado
      </Button>
    </Grid>
  );
}
