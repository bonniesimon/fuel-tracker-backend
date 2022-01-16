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

/**
 * Rules of the API
 */
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

	if(req.method == 'OPTIONS'){
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json({});
	}
	next();
})


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
	res.send("/ endpoint hit");
});

app.listen(5000, () => {
	logger.info(`App is running at ${config.server.hostname}:${config.server.port}`);
})