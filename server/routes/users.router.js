// import path from "path";
import express from "express";

import {
  getUsers,
  addUser,
  updateUser,
  removeUser,
  getUsersUsers,
  // getOwnUsers,
  // addOwnUser,
  // updateOwnUser,
  // removeOwnUser,
} from "../controllers/Users.controller.js";

const router = express.Router();

router.get("/:id?", getUsers).post("/user/:userid", getUsersUsers);

// .post("/", addUser)
// .put("/:id", updateUser)
// .delete("/:id", remove);

export default router;
