import express from "express";
import {createCarHandler, getAllCarsHandler} from "../controller/car.controller";

const router = express.Router();

router.get("/api/car/all", getAllCarsHandler);
router.post("/api/car/create", createCarHandler);

export default router;