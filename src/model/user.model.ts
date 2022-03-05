import mongoose, {Document, Schema} from "mongoose";

interface UserType extends Document{
	fullName: string;
	email: string;
	password: string;
}

const userSchema: Schema = new Schema({
	fullName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true,
		validate: {
			validator: function (v: string) {
			  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
			},
			message: '{VALUE} is not a valid email!'
		}
	},
	password: {
		type: String,
		required: true
	}
});

const UserModel = mongoose.model<UserType>('User', userSchema);

export default UserModel;
export type {UserType};