import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 5000;

const MONGODB_CLUSTER_PASSWORD = process.env.MONGODB_CLUSTER_PASSWORD;
const MONGODB_DATABASE = process.env.MONGODB_DATABASE_NAME;
const MONGODB_URI = `mongodb+srv://bonniesimon:${MONGODB_CLUSTER_PASSWORD}@fuel-tracker.085xe.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`

const JWT_ACCESSTOKEN_SECRET = process.env.JWT_ACCESSTOKEN_SECRET;
const JWT_REFRESHTOKEN_SECRET = process.env.JWT_REFRESHTOKEN_SECRET;
const JWT_ACCESSTOKEN_EXPIRES_IN = process.env.JWT_ACCESSTOKEN_EXPIRES_IN;
const JWT_REFRESHTOKEN_EXPIRES_IN = process.env.JWT_REFRESHTOKEN_EXPIRES_IN;

const BCRYPT_HASH_ROUNDS = process.env.BCRYPT_HASH_ROUNDS;

const SERVER = {
	hostname: SERVER_HOSTNAME,
	port: SERVER_PORT
}

const DATABASE = {
	uri: MONGODB_URI
}

const BCRYPT = {
	hashRounds: BCRYPT_HASH_ROUNDS as string | number
}

const JWT = {
	jwt_accesstoken_secret : JWT_ACCESSTOKEN_SECRET as string,
	jwt_refreshtoken_secret : JWT_REFRESHTOKEN_SECRET as string,
	jwt_accesstoken_expires_in : JWT_ACCESSTOKEN_EXPIRES_IN,
	jwt_refreshtoken_expires_in : JWT_REFRESHTOKEN_EXPIRES_IN
}

const config = {
	server: SERVER,
	database: DATABASE,
	bcrypt: BCRYPT,
	jwt: JWT,
	logLevel: 'info'
}


export default config;