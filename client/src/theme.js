import { createTheme } from "@mui/material/styles";
import red from "@mui/material/colors/red";

let theme = createTheme({
  palette: {
    primary: {
      main: "#F8F1F1",
      contrastText: "#282120",
    },
    secondary: {
      main: "#F46E5B",
      contrastText: "#FDFDFD",
    },
  },
});

export default theme;
