import express, {Request, Response} from "express";
import {createCarHandler, getAllCarsHandler} from "../controller/car.controller";

const router = express.Router();

router.get("/api/cars", getAllCarsHandler);
router.post("/api/cars/create", createCarHandler);

export default router;