import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Lato",
  },
  palette: {
    primary: {
      main: "#FFB800",
      contrastText: "#fff",
    },
  },
  overrides: {
    MuiButton: {
      label: {
        textTransform: "initial",
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: "35px",
      },
    },
  },
});

function Tema(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default Tema;
