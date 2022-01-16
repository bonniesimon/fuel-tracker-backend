import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 5000;

const MONGODB_CLUSTER_PASSWORD = process.env.MONGODB_CLUSTER_PASSWORD;
const MONGODB_DATABASE = process.env.MONGODB_DATABASE_NAME;
const MONGODB_URI = `mongodb+srv://bonniesimon:${MONGODB_CLUSTER_PASSWORD}@fuel-tracker.085xe.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`

const SERVER = {
	hostname: SERVER_HOSTNAME,
	port: SERVER_PORT
}

const DATABASE = {
	uri: MONGODB_URI
}

const config = {
	server: SERVER,
	database: DATABASE
}


export default config;