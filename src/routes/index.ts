import express from 'express';
import car from '../routes/car.routes';
import fuelEntry from '../routes/fuelEntry.routes';

const router = express.Router();

router.get("/healthcheck", (_, res) => {
	res.sendStatus(200);
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