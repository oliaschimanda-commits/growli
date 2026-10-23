import prisma from "../../prisma/prisma.js";
import { json } from "node:stream/consumers";

export const createFarmingInfo = async (req, res) => {
    const { data} = req.body;

    try{
        const newInfo = await prisma.farmingInformation.create({
            data: data
        })
        res.status(201).json(newInfo);
    }catch(error){
        console.log("Error creating info", error);
        res.status(500).json({message: "Internal server error"})
    }
}

export const getFarmingInfoById = async (req, res) => {
    const { id } = req.params;

    try{
        const info = await prisma.farmingInformation.findUnique({
            where: { id: parseInt(id)},
        });
        if(!info){
            return res.status(404).json({ message: 'Info not found' }); 
        }
        res.json(info);
    } catch (error) {
        console.error('Error fetching farming info:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//use this only for testing purposes. and you are sure the database is small
export const getAllFarmingInfo = async (req, res) => {

    try {

        const info = await prisma.farmingInformation.findMany();
        res.json(info);

    }catch(error){
        console.log("Error getting farming info", error);
        res.status(500).json({message: "Internal server error"});
    }
}

//advised to use this method when getting users to void performance issues when the database grows
export const getFarmingInfos = async (req, res) => {

    const { page = 1, limit = 10 } = req.query;

    try {

        const info = await prisma.farmingInformation.findMany({
            skip: (page - 1) * limit,
            take: parseInt(limit)
        });
        res.json(info);

    }catch(error){
        console.log("Error getting farming info", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export const updateFarmingInfo = async (req, res) => {
    const {id} = req.params;
    const {data } = req.body;

    try{
        const updateInfo = await prisma.farmingInformation.update({
            data:data
        })

        res.status(200).json({message: "Farming info updated successfully"});
    }catch(error){
        console.log("Error updating farming info",error)
    }
}

export const searchFarmingInfo = async (req, res) => {
    const { query} = req.query;

    try{

        const info = await prisma.farmingInformation.findMany({
            where:{
                OR:[
                    {title: {contains: query}},
                    {article: {contains: query}},
                ]
            }
        })

        res.status(200).json(info);

    }catch(error){
        console.log("Error searching farming info", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export const deleteFarmingInfo = async (req, res) => {
    const {id} = req.params;
    try{
        const deleteInfo = await prisma.farmingInformation.delete({
            where: {id: parseInt(id)}
        })
        res.status(200).json({message: "Farming info deleted successfully"});
    }catch(error){
        console.log("Error deleting farming info",error)
        res.status(500).json({message: "Internal server error"});
    }
}

