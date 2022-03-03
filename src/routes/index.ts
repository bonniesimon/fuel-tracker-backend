import express from 'express';
import car from '../routes/car.routes';
import fuelEntry from '../routes/fuelEntry.routes';

const router = express.Router();

router.get("/", (_, res) => {
	res.status(200).send("Fuel Tracker API v0.1");
});

router.get("/healthcheck", (_, res) => {
	res.status(200).send("Fuel Tracker API is online");
});

/**
 * /api/cars
 */
router.use(car);

/**
 * /api/fuelentries
 */
router.use(fuelEntry);


export default router;