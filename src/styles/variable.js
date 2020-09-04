import { createMuiTheme } from "@material-ui/core/styles";
export const lightTheme = createMuiTheme({
  //colors
  backgroundColor: "rgba(120, 88, 221, 1)",
  header: "#273f59",
  primary: "#606060",
  secondary: "#fff",
  text: "#636262",
  footerBackground: "#27353b",

  //weights
  bold5: 500,
  bold: 600,
  bolder: 900,

  //font size
  f1: "50px",
  fn: "15px",
});

export const darkTheme = createMuiTheme({
  backgroundColor: "#2d132c",
  header: "#801336",
  primary: "#c72c41",
  secondary: "#ee4540",
  text: "#2d132c",
  footerBackground: "#27353b",
});
