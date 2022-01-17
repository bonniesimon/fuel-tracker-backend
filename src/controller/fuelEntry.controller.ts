import {Request, Response} from "express";
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
		const result = await FuelEntryModel.find({});
		return res.status(200).json(result);
	}catch(e: any){
		log.error(e.message);
		return res.status(500).send("Server Error");
	}
}

const getFuelEntryByCarID = async(req: Request, res: Response) => {
	const {caridFromURLParam} = req.params;

	try{
		const result = await FuelEntryModel.find({carID: caridFromURLParam});
		return res.status(200).json(result);
	}catch(e: any){
		log.error(e.message);
		return res.status(500).send("Server Error");
	}
}

export {createFuelEntryHandler, getAllFuelEntryHandler, getFuelEntryByCarID};