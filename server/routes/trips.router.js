// import path from "path";
import express from "express";

import {
  getTrips,
  addTrip,
  updateTrip,
  removeTrip,
  getUsersTrips,
  // getOwnTrips,
  // addOwnTrip,
  // updateOwnTrip,
  // removeOwnTrip,
} from "../controllers/Trips.controller.js";

const router = express.Router();

router.get("/:id?", getTrips).post("/user/:userid", getUsersTrips);

// .post("/", addTrip)
// .put("/:id", updateTrip)
// .delete("/:id", remove);

export default router;
