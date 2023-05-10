import express from "express";
import postRenterRegisterController from "../../controllers/renters/post-renter-register/PostRegisterController";
import getRenterController from "../../controllers/renters/get-renter/GetRenterController";

const router = express.Router();
const postRenterRegisterControllerInstace = new postRenterRegisterController;
const getRenterControllerInstace = new getRenterController();

router
    .post("/create", postRenterRegisterControllerInstace.handler)
    .get("/find", getRenterControllerInstace.handler)

export default router