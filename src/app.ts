import express from "express";
import logger from "./utils/logger";

const app = express();

app.listen(5000, () => {
	logger.info(`App is running at `);
})