import express from "express";
import authRouter from "./auth/authRoutes"
import reservesRouter from "./reserves/reservesRoutes"

const routes = express.Router();

routes.use("/auth", authRouter);
routes.use("/reserves", reservesRouter)

export default routes;