import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { loginWithRedirect, logout, user } = useAuth0();
  const logoutFn = () => logout({ returnTo: window.location.origin });
  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar position="static">
        <Toolbar>
          <Button
            sx={{
              my: 3,
              ml: 5,
              color: "#282120",
              display: "block",
              fontSize: 26,
              fontWeight: "bold",
              fontFamily: "Corben",
            }}
            component={NavLink}
            to="/"
          >
            World Tripper
          </Button>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {user ? (
              <Button
                sx={{
                  my: 2,
                  display: "block",
                  fontFamily: "Nobile",
                  fontWeight: 500,
                }}
                variant="contained"
                color="secondary"
                onClick={logoutFn}
              >
                Logout
              </Button>
            ) : (
              <Button
                sx={{ my: 2, display: "block" }}
                variant="contained"
                color="secondary"
                onClick={loginWithRedirect}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
