import express from 'express';
import { createFuelEntryHandler, deleteFuelEntryHandler, getAllFuelEntryHandler, getFuelEntryByCarID } from '../controller/fuelEntry.controller';

const router = express.Router();

router.get("/api/fuelentry/all", getAllFuelEntryHandler);
router.post("/api/fuelentry/create", createFuelEntryHandler);
router.get("/api/fuelentry/:carid", getFuelEntryByCarID);
router.delete("/api/fuelentry/delete/:fuelentryid", deleteFuelEntryHandler);


export default router;