import { createTheme } from "@mui/material/styles";
import red from "@mui/material/colors/red";

let theme = createTheme({
  palette: {
    primary: {
      main: "#E7F3F3",
      contrastText: "#32A69B",
    },
    secondary: {
      main: "#fff",
      contrastText: "#000",
    },
  },
});

export default theme;
