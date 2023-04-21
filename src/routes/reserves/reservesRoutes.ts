import express from "express"
import postReserveController from "../../controllers/reserves/post-reserves/PostReservesController";

const router = express.Router();
const postReserveControllerInstace = new postReserveController;

router
    .post("/create", postReserveControllerInstace.handler)

export default router