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
    color: "#FF005C",
    borderRadius: "15px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
  },
  img: {
    marginBottom: "10px",
  },
}));
