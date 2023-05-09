import express from "express";
import postRenterRegisterController from "../../controllers/renters/post-renter-register/PostRegisterController";


const router = express.Router();
const postRenterRegisterControllerInstace = new postRenterRegisterController;

router
    .post("/create", postRenterRegisterControllerInstace.handler)

export default router