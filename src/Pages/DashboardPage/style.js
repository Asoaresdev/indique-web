import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  titulo: {
    border: "1px solid #FFF",
    borderRadius: "200px",
    width: "fit-content",
    padding: "10px 40px",
    color: "#FFF",
    fontSize: "18px",
    letterSpacing: "1.5px",
  },

  header: {
    background: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    padding: "15px",
    maxHeight: "78px",
  },

  gridAvatar: {
    background: theme.palette.primary.main,
    padding: "15px",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  gridContainer: {
    height: "100vh",
    overflow: "hidden",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  content: {
    padding: "30px",
  },
  button: {
    padding: "30px",
    background: "#F6F6F6",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    width: "280px",
    height: "160px",
    fontSize: "35px",
    fontWeight: "bold",
    borderRadius: "35px",
  },
  gridButtons: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "30px",
    flexDirection: "row",
  },
  buttonVagas: {
    color: "#FF005C",
  },
  buttonConteudos: {
    color: "#0449F9",
  },
  buttonCandidaturas: {
    color: "#06A003",
  },
}));
