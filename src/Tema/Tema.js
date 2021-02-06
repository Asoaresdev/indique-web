import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Lato",
  },
  palette: {
    primary: {
      main: "#FFB800",
    },
  },
  overrides: {
    MuiButton: {
      label: {
        textTransform: "initial",
      },
    },
  },
});

function Tema(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default Tema;
