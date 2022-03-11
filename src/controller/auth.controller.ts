import {Request, Response} from "express";
import UserModel from "../model/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import log from "../utils/logger";
import config from "../config/default";


const registerUser = async (req: Request, res: Response) => {
	const {fullName, email, password} = req.body;
	
	const isUser = await UserModel.find({email: email});
	
	if(isUser.length > 0) return res.status(409).json({
		status: "fail",
		error: "User already exists."
	});
	
	const hashedPassword = bcrypt.hashSync(password, config.bcrypt.hashRounds);
	
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

	const user = await UserModel.findOne({email: email});
	
	if(!user || !(bcrypt.compareSync(password, user.password))){
		return res.status(401).json({status: "fail", error: "Email or Password is wrong"});
	}

	const accessToken = jwt.sign({fullName: user.fullName, email: user.email}, config.jwt.jwt_accesstoken_secret as string, {expiresIn: config.jwt.jwt_accesstoken_expires_in});
	const refreshToken = jwt.sign({fullName: user.fullName, email: user.email}, config.jwt.jwt_refreshtoken_secret as string, {expiresIn: config.jwt.jwt_refreshtoken_expires_in});

	return res.status(200).json({status: "success", data: {
		user: {fullName: user.fullName, email: user.email},
		jwtTokens: {accessToken, refreshToken}
	}});
}


export {registerUser, loginUser};