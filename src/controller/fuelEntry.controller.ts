import {Request, Response} from "express";
import FuelEntryModel from "../model/fuelEntry.model";
import log from "../utils/logger";


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

export {createFuelEntryHandler};