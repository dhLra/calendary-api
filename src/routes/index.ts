import express from "express";
import authRouter from "./auth/authRoutes"
import reservesRouter from "./reserves/reservesRoutes"
import rentersRouter from "./renters/rentersRouters"

const routes = express.Router();

routes.use("/auth", authRouter);
routes.use("/reserves", reservesRouter)
routes.use("/renters", rentersRouter)

export default routes;