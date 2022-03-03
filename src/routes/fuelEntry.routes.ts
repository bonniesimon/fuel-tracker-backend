import express from 'express';
import { createFuelEntryHandler, deleteFuelEntryHandler, getAllFuelEntryHandler, getFuelEntryByCarID, updateFuelEntryHandler } from '../controller/fuelEntry.controller';

const router = express.Router();

router.get("/api/fuelentry/all", getAllFuelEntryHandler);
router.post("/api/fuelentry/create", createFuelEntryHandler);
router.get("/api/fuelentry/:carid", getFuelEntryByCarID);
router.delete("/api/fuelentry/delete/:fuelentryid", deleteFuelEntryHandler);
router.patch("/api/fuelentry/update", updateFuelEntryHandler);


export default router;