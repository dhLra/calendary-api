import express from "express"
import postReserveController from "../../controllers/reserves/post-reserves/PostReservesController";
import getReserveController from "../../controllers/reserves/get-reserves/GetReservesController";
import getReservesPoolController from "../../controllers/reserves/get-reserves-pool/GetReservesPoolController";
import deactiveReserveController from "../../controllers/reserves/deactive-reserves/DeactiveReservesController";
import updateReservesController from "../../controllers/reserves/update-reserves/UpdateReservesController"; 

const router = express.Router();
const postReserveControllerInstace = new postReserveController;
const getReserveControllerInstace = new getReserveController;
const getReservesPoolControllerInstace = new getReservesPoolController;
const deactiveReserveControllerInstace = new deactiveReserveController;
const updateReservesControllerInstace = new updateReservesController;

router
    .post("/create", postReserveControllerInstace.handler)
    .get("/findMany", getReserveControllerInstace.handler)
    .post("/findAll", getReservesPoolControllerInstace.handler)
    .post("/deactive", deactiveReserveControllerInstace.handler)
    .post("/update", updateReservesControllerInstace.handler)

export default router