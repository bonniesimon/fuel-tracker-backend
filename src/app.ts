import express from "express";
import logger from "./utils/logger";
import config from './config/default';

const app = express();

app.use(express.json());

app.listen(5000, () => {
	logger.info(`App is running at ${config.server.hostname}:${config.server.port}`);
})