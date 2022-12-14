import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import { Auth0Provider } from "@auth0/auth0-react";

// Theme
import theme from "./theme";

// Layout
import PageLayout from "./components/PageLayout";
import ProtectedRoute from "./components/ProtectedRoute";

// import ErrorBoundary from "./components/ErrorBoundary";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Trips from "./pages/Trips";
import AddTrips from "./pages/AddTrips";

// Data Contexts - order matters
import { AuthProvider } from "./contexts/auth.context";
import { PlacesProvider } from "./contexts/places.context";
import { UsersProvider } from "./contexts/users.context";
import { TripsProvider } from "./contexts/trips.context";

//Auth0 Settings
import history from "./utils/history.js";
import { getConfig } from "./config";

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
};

function App() {
  return (
    <>
      <Router>
        <Auth0Provider {...providerConfig}>
          <AuthProvider>
            <PlacesProvider>
              <UsersProvider>
                <TripsProvider>
                  <CssBaseline />
                  <ThemeProvider theme={theme}>
                    <Routes>
                      <Route path="/" element={<PageLayout />}>
                        <Route index element={<Home />} />
                        <Route
                          path="profile"
                          element={
                            <ProtectedRoute>
                              <Profile />
                            </ProtectedRoute>
                          }
                        />
                        <Route
                          path="trips"
                          element={
                            <ProtectedRoute>
                              <Trips />
                            </ProtectedRoute>
                          }
                        />
                        <Route
                          path="trips/add"
                          element={
                            <ProtectedRoute>
                              <AddTrips />
                            </ProtectedRoute>
                          }
                        />
                        <Route path="*" element={<NotFound />} />
                      </Route>
                    </Routes>
                  </ThemeProvider>
                </TripsProvider>
              </UsersProvider>
            </PlacesProvider>
          </AuthProvider>
        </Auth0Provider>
      </Router>
    </>
  );
}

export default App;
