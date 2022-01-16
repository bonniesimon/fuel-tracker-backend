import express from "express";
import logger from "./utils/logger";
import config from './config/default';

const app = express();

/**
 * Middleware: Log every request
 */

app.use((req, res, next) => {
	logger.info(`METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

	res.on('finish', () => {
		logger.info(`METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
	})

	next();
})

app.use(express.json());

app.listen(5000, () => {
	logger.info(`App is running at ${config.server.hostname}:${config.server.port}`);
})