import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: "100%",
    cursor: "pointer",
    padding: "10px 0",
    backgroundColor: "#fff",
    fontSize: "16px",
    color: "#000",
    minHeight: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
  }
}));
