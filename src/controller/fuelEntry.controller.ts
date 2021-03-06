import {Request, Response} from "express";
import mongoose from "mongoose";
import FuelEntryModel from "../model/fuelEntry.model";
import log from "../utils/logger";

/**
 * TODO: Don't create document if document with same field exists 
 */
const createFuelEntryHandler = async (req:Request, res: Response) => {
	const {carID, entryDate, amount, litres, pricePerLitre, kilometerReading} = req.body;

	try{
		const newFuelEntry = new FuelEntryModel({
			carID,
			entryDate,
			amount,
			litres,
			pricePerLitre,
			kilometerReading
		});

		await newFuelEntry.save();
		return res.status(201).json(newFuelEntry);
	}catch(e: any){
		log.error(e.message);
		return res.status(500).send("Server Error");
	}
}

const getAllFuelEntryHandler = async (req: Request, res: Response) => {
	try{
		const result = await FuelEntryModel.find({}).sort({entryDate: -1});
		return res.status(200).json(result);
	}catch(e: any){
		log.error(e.message);
		return res.status(500).send("Server Error");
	}
}

const getFuelEntryByCarID = async(req: Request, res: Response) => {
	const caridFromURLParam  = req.params.carid;

	try{
		const result = await FuelEntryModel.find({carID: caridFromURLParam}).sort({entryDate: -1});
		return res.status(200).json(result);
	}catch(e: any){
		log.error(e.message);
		return res.status(500).send("Server Error");
	}
}

const deleteFuelEntryHandler = async(req: Request, res: Response) => {
	const fuelEntryID = req.params.fuelentryid;
	try{
		const result = await FuelEntryModel.findOneAndDelete({_id: fuelEntryID});
		if(!result) {
			return res.status(404).json({message: "Given resource not found"});
		}
		return res.status(200).send(result);
	}catch(e: any){
		log.error(e.message);
		return res.status(500).json("Server Error");
	}
}

/*
*	TODO: Check if update successfull using result. 
*	Also update the response object to only include the udpatedValues
*/
const updateFuelEntryHandler = async(req: Request, res: Response) => {
	const {id, ...reqData} = req.body;
	try{
		const result = await FuelEntryModel.updateOne(
			{_id: id},
			{
				$set: reqData,
				$currentDate: {updatedAt: true}
			}	
		);

		console.log(result)
		return res.status(200).json({...result, updatedValues: {id: id, updatedFields: reqData}});
	}catch(e: any){
		log.error(e);
		return res.status(500).json("Internal Server Error");
	}

};

export {createFuelEntryHandler, getAllFuelEntryHandler, getFuelEntryByCarID, deleteFuelEntryHandler, updateFuelEntryHandler};
