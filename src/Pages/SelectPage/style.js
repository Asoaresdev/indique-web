import { makeStyles } from "@material-ui/core/styles";
import telaselect from "../../assets/telaselect.png";

export const useStyles = makeStyles((theme) => ({
  gridApresentacao: {
    background: `url(${telaselect})`,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "70px",
    color: "#FFF",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  root: {
    height: "100vh",
  },
  button: {
    margin: "25px 0",
    padding: "15px 0",
    borderRadius: "20px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "36px",
    lineHeight: "43px",
    color: theme.palette.primary.main,
  },
  containerButtons: {
    padding: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  titulo: {
    fontWeight: "bold",
  },

  subtitulo: {
    marginTop: "50px",
  },
  opcao: {
    marginBottom: "50px",
  },
}));
