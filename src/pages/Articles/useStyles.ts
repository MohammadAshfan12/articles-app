import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { light } from "@mui/material/styles/createPalette";

export const useStyles = makeStyles((theme: Theme) => ({
  articlesWrapper: {
    backgroundColor: "#efefef",
    display: "flex",
    alignItems: "center"
  },
  main: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px 0",
    width: "90%",
    margin: "0 auto",
  },
  error: {
    fontSize: "18px",
    fontWeight: 300,
    whiteSpace: "nowrap"
  }
}));
