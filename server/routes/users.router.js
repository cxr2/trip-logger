// import path from "path";
import express from "express";

import {
  getUsers,
  addUser,
  updateUser,
  removeUser,
  // getOwnUsers,
  // addOwnUser,
  // updateOwnUser,
  // removeOwnUser,
} from "../controllers/Users.controller.js";

const router = express.Router();

router.get("/:id?", getUsers).post("/user/:userid", getUsers);

// .post("/", addUser)
// .put("/:id", updateUser)
// .delete("/:id", remove);

export default router;
