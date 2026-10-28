import prisma from "../../prisma/prisma.js";
import { json } from "node:stream/consumers";

export const createTrainingEvent = async (req, res) => {
    const { data} = req.body;

    try{
        const newEvent = await prisma.training.create({
            data: data
        })
        res.status(201).json(newEvent);
    }catch(error){
        console.log("Error creating event", error);
        res.status(500).json({message: "Internal server error"})
    }
}

export const getTrainingEventById = async (req, res) => {
    const { id } = req.params;

    try{
        const event = await prisma.training.findUnique({
            where: { id: parseInt(id)},
        });
        if(!event){
            return res.status(404).json({ message: 'Event not found' }); 
        }
        res.json(user);
    } catch (error) {
        console.error('Error fetching event:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//use this only for testing purposes. and you are sure the database is small
export const getAllTrainingEvents = async (req, res) => {

    try {

        const events = await prisma.training.findMany();
        res.json(events);

    }catch(error){
        console.log("Error getting events", error);
        res.status(500).json({message: "Internal server error"});
    }
}

//advised to use this method when getting users to void performance issues when the database grows
export const getTrainingEvents = async (req, res) => {

    const { page = 1, limit = 10 } = req.query;

    try {

        const events = await prisma.training.findMany({
            skip: (page - 1) * limit,
            take: parseInt(limit)
        });
        res.json(events);

    }catch(error){
        console.log("Error getting events", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export const updateTrainingEvent = async (req, res) => {
    const {id} = req.params;
    const {data } = req.body;

    try{
        const event = await prisma.training.update({
            data:data
        })

        res.status(200).json({message: "Event updated successfully"});
    }catch(error){
        console.log("Error updating event",error)
    }
}

export const searchTrainingEvents = async (req, res) => {
    
    const { query, page = 1, limit = 10 } = req.query;

    try{

        const events = await prisma.training.findMany({
            skip: (page - 1) * limit,
            take: parseInt(limit),
            where:{
                OR:[
                    {title: {contains: query}},
                    {country: {contains: query}},
                    {state: {contains: query}},
                    {city: {contains: query}},
                    {place: {contains: query}},
                    {status: {contains: query}}
                ]
            }
        })

        res.status(200).json(events);

    }catch(error){
        console.log("Error searching events", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export const deleteTrainingEvent = async (req, res) => {
    const {id} = req.params;
    try{
        const event = await prisma.training.delete({
            where: {id: parseInt(id)}
        })
        res.status(200).json({message: "Event deleted successfully"});
    }catch(error){
        console.log("Error deleting event",error)
        res.status(500).json({message: "Internal server error"});
    }
}

