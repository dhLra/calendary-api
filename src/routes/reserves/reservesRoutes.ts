import express from "express"
import postReserveController from "../../controllers/reserves/post-reserves/PostReservesController";
import getReserveController from "../../controllers/reserves/get-reserves/GetReservesController";

const router = express.Router();
const postReserveControllerInstace = new postReserveController;
const getReserveControllerInstace = new getReserveController;

router
    .post("/create", postReserveControllerInstace.handler)
    .get("/findMany", getReserveControllerInstace.handler)

export default router