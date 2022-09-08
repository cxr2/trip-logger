import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { TripsContext } from "./../contexts/trips.context";
import {
  Button,
  IconButton,
  Typography,
  Box,
  List,
  ListItem,
} from "@mui/material";
import Delete from "@mui/icons-material/Delete";

// import EB from "../components/ErrorBoundary";

function Trips() {
  const { fetchTrips, trips, loaded, loading, deleteTrip } =
    useContext(TripsContext);

  useEffect(() => {
    console.log("HERRERERERE", { trips, loaded, loading });
    if (!loaded && !loading) {
      console.log("fetching");
      fetchTrips();
    }
  });

  return (
    <div>
      <Typography variant="h1">Trips</Typography>
      {/* <pre>
        <code>{JSON.stringify({ trips, loaded, loading })}</code>
      </pre> */}
      <div>
        <Button
          sx={{
            my: 2,
            "&:hover": {
              color: "white",
            },
          }}
          component={Link}
          to="/trips/add"
          primary="true"
          variant="contained"
        >
          Add a trip!
        </Button>
      </div>
      {trips?.length === 0 && <p>No trips listed</p>}
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <List>
          {trips.map(({ date, place, _id }) => (
            <ListItem disablePadding key={_id}>
              {place.name.common} (Date: {dayjs(date).format("DD/MM/YYYY")})
              <IconButton
                aria-label="delete"
                color="primary"
                onClick={() => deleteTrip(_id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default Trips;
