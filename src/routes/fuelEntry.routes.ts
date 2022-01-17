import express from 'express';
import { createFuelEntryHandler, getAllFuelEntryHandler, getFuelEntryByCarID } from '../controller/fuelEntry.controller';

const router = express.Router();

router.get("/api/fuelentry/all", getAllFuelEntryHandler);
router.post("/api/fuelentry/create", createFuelEntryHandler);
router.get("/api/fuelentry/:carid", getFuelEntryByCarID);


export default router;