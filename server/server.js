import express from "express";
import "./database.js";
import middlewareSetup from "./routes/index.js";
import setupRoutes from "./routes/index.js";

const {} = process.env;

const app = express();

middlewareSetup(app);
setupRoutes(app);

export default app;
