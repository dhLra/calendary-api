import express from "express"
import authController from "../../controllers/auth/AuthController"

const router = express.Router();
const authControllerInstace = new authController;

router
    .post("/login", authControllerInstace.handler)

export default router