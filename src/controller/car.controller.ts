import { profile } from "console";
import {Request, Response} from "express";
import mongoose from "mongoose";
import CarModel from "../model/car.model";
import log from "../utils/logger";

const createCarHandler = async (req: Request, res: Response) => {
	const {carName, fuelType} = req.body;
	try{
		const newCar = new CarModel({
			_id: new mongoose.Types.ObjectId(),
			carName: carName,
			fuelType: fuelType
		})
	
		await newCar.save();	
		return res.status(201).json(newCar);
	}catch(e: any){
		log.error(e.message);
		res.status(500).send("Server Error");
	}
	

}

export {createCarHandler};