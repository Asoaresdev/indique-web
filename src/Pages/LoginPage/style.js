import { makeStyles } from "@material-ui/core/styles";
import casal from "../../assets/casal.png";
import predios from "../../assets/predios.png";

export const useStyles = makeStyles((theme) => ({
  gridApresentacao: {
    // background: theme.palette.primary.main,
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
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    background: `url(${casal})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "bottom",
  },
  areaLogin: {
    margin: "20px 0 80px 0",
    fontWeight: "bold",
  },
  button: {
    borderRadius: "35px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 900,
    color: "#FFF",
  },
  homeButton: {
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: 1.66,
  },
  signUp: {
    padding: "10px 30px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  titulo: {
    fontWeight: "bold",
  },

  subtitulo: {
    marginTop: "50px",
  },
  opcao: {
    marginBottom: "20px",
    color: theme.palette.primary.main,
    fontSize: "36px",
  },
  step: {
    color: "#494848",
    fontSize: "28px",
  },
  stepNumber: {
    marginRight: "15px",
    background: theme.palette.primary.main,
    color: "#fff",
    borderRadius: "100%",
    padding: "5px 10px",
  },
  textField: {
    marginBottom: "10px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "35px",
  },
  divSubmit: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "10px 0",
  },
  containerForm: {
    height: "100%",
  },
  form: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "100%",
  },
}));
