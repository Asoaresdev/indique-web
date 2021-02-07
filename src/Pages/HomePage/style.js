import { makeStyles } from "@material-ui/core/styles";
import homesuperior from "../../assets/homesuperior.png";
export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },

  titulo: {
    color: "#FFF",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    marginLeft: "50px",
    height: "90%",
  },

  headerContent: {
    height: "100%",
  },

  header: {
    background: `url(${homesuperior}) `,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "15px",
    maxHeight: "400px",
    filter: "brightness(90%)",
    height: "100%",
  },

  login: {
    display: "flex",
    justifyContent: "flex-end",
  },

  Btcadastro: {
    borderRadius: "35px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },

  Btlogin: {
    borderRadius: "35px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginLeft: "10px",
  },
  content: {
    marginTop: "30px",
    marginBottom: "30px",
  },
}));
