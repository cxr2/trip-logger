// import path from "path";
import express from "express";

import {
  getPlaces,
  addPlace,
  updatePlace,
  removePlace,
  getUsersPlaces,
  // getOwnPlaces,
  // addOwnPlace,
  // updateOwnPlace,
  // removeOwnPlace,
} from "../controllers/places.controller.js";

const router = express.Router();

router.get("/:id?", getPlaces).post("/user/:userid", getUsersPlaces);

// .post("/", addPlace)
// .put("/:id", updatePlace)
// .delete("/:id", remove);

export default router;
