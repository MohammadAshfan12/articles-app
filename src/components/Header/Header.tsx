import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useStyles } from "./useStyles";

export default function Header() {
  const styles = useStyles();
  return (
    <header>
      <AppBar className={styles.header}>
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Articles List
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}
