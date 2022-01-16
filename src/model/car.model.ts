import mongoose, {Schema, Document} from 'mongoose';

interface CarType extends Document{
	carName: string;
	fuelType: string;
}

const carSchema: Schema = new Schema({
	carName: {
		type: String,
		required: true
	},
	fuelType: {
		type: String,
		required: true
	}
}, {timestamps: true}); 

const CarModel = mongoose.model<CarType>("Car", carSchema);

export default CarModel;
export type {CarType};