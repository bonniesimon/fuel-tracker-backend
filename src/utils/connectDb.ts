import config from "../config/default";
import log from "./logger";
import { connect } from "mongoose";

const connectDb = async () => {
	const dbUri = config.database.uri;
	try {
		await connect(dbUri);
		log.info("DB Connected");
	} catch (error) {
		log.error(error);
		process.exit(1);	
	}
}

export default connectDb;
