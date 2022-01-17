import express from 'express';
import car from '../routes/car.routes';

const router = express.Router();

router.get("/healthcheck", (_, res) => {
	res.sendStatus(200);
});

/**
 * /api/cars
 */
router.use(car);



export default router;