import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "10px",
    cursor: "pointer",
    fontSize: "26px",
    borderRadius: "15px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
    marginBottom: "40px",
    minHeight: "192px",
  },
  img: {
    marginBottom: "10px",
  },
  texto: {
    fontWeight: "bold",
  },
  texto: {
    fontWeight: "bold",
  },
  botao: {
    fontWeight: "bold",
    borderRadius: "35px",
  },
}));
