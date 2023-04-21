import express from "express";
import authRouter from "./auth/authRoutes"

const routes = express.Router();

routes.use("/auth", authRouter);

export default routes;