import mongoose, {Document, Schema} from 'mongoose';
import {CarType} from './car.model';

interface FuelEntryType extends Document{
	carID: CarType["_id"];
	entryDate: string;
	amount: number;
	litres: number;
	pricePerLitre: number;
	kilometerReading: number;
}

const fuelEntrySchema: Schema = new Schema({
	carID: {
		type: Schema.Types.ObjectId,
		ref: 'Car'
	},
	entryDate: {
		type: String,
		required: true
	},
	amount: {
		type: Number,
		required: true
	},
	litres: {
		type: Number,
		required: true
	},
	pricePerLitre: {
		type: Number,
		required: true
	},
	kilometerReading: {
		type: Number
	}
}, {timestamps: true});

const FuelEntryModel = mongoose.model<FuelEntryType>("FuelEntry", fuelEntrySchema);

export default FuelEntryModel;