import express, {Request, Response} from "express";
import {createCarHandler} from "../controller/car.controller";

const router = express.Router();

router.post("/api/cars/create", createCarHandler);

export default router;