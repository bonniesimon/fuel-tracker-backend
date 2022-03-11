import {Request, Response} from "express";
import UserModel from "../model/user.model";
import bcrypt from "bcrypt";
import log from "../utils/logger";


const registerUser = async (req: Request, res: Response) => {
	const {fullName, email, password} = req.body;
	
	const isUser = await UserModel.find({email: email});
	
	if(isUser.length > 0) return res.status(409).json({
		status: "fail",
		error: "User already exists."
	});
	
	const hashedPassword = bcrypt.hashSync(password, 8);
	
	try {
		const newUser = new UserModel({
			fullName: fullName, 
			email: email,
			password: hashedPassword
		});
		await newUser.save();
		return res.status(200).json({status: "sucess", data: {email: newUser.email, fullName: newUser.fullName}});
	} catch (error: any) {
		log.error(error.message);
		return res.status(500).json({status: "error", error: "Server Error"});
	}


};


const loginUser = async(req: Request, res: Response) => {
	const {email, password} = req.body;

	return res.status(200).json({status: "success", data: "Route working"});
}


export {registerUser, loginUser};