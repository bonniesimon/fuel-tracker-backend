import express from 'express';
import { createFuelEntryHandler } from '../controller/fuelEntry.controller';

const router = express.Router();

router.post("/api/fuelentry/create", createFuelEntryHandler);


export default router;