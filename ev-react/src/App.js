import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from "./appStyles";
import { mergeClasses } from "@material-ui/styles";

import Navbar from "./components/Navbar";

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Navbar classes={classes.navBar} />
      <main className={mergeClasses.mainBackgound}>
        <h1>Evelyns Website</h1>
      </main>
    </>
  );
}

export default App;
