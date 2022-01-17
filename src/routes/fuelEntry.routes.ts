import express from 'express';
import { createFuelEntryHandler, getAllFuelEntryHandler } from '../controller/fuelEntry.controller';

const router = express.Router();

router.get("/api/fuelentry/all", getAllFuelEntryHandler);
router.post("/api/fuelentry/create", createFuelEntryHandler);


export default router;