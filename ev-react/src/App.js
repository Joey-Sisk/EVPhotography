import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import useStyles from "./appStyles";
import { mergeClasses } from "@material-ui/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import Navbar from "./components/Navbar";
import { Typography } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f3969a",
      contrastText: "#fff"
    },
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar classes={classes.navBar} theme={createTheme} />
        <main className={mergeClasses.mainBackgound}>
          <Typography>Evelyns Website</Typography>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
