import prisma from "../../prisma/prisma.js";
import bcrypt from "bcrypt";
import { json } from "node:stream/consumers";

export const createUser = async (req, res) => {
    const { firstName, lastName, email, password} = req.body;

    if (!email || !password) {
        res.status(400).json('Email and password are required');
        return
    }

    const hashedPassword = await bcrypt.hash(password, 10);    

    try{
        const password = hashedPassword;
        
        const newUser = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                password
            }
        })
        res.status(201).json(newUser);
    }catch(error){
        console.log("Error creating user", error);
        res.status(500).json({message: "Internal server error"})
    }
}

export const getUserById = async (req, res) => {
    const { id } = req.params;
    console.log("ID: ",id)
    try{
        const user = await prisma.user.findUnique({
            where: { userId: id},
        });
        if(!user){
            return res.status(404).json({ message: 'User not found' }); 
        }
        res.json(user);
    } catch (error) {
        console.error(error.meta?.driverAdapterError?.cause)
        res.status(500).json({ message: 'Internal server error' });
    }
}

//use this only for testing purposes. and you are sure the database is small
export const getAllUsers = async (req, res) => {

    try {

        const users = await prisma.user.findMany();
        res.json(users);

    }catch(error){
        console.log("Error getting users", error);
        res.status(500).json({message: "Internal server error"});
    }
}

//advised to use this method when getting users to void performance issues when the database grows
export const getUsers = async (req, res) => {

    const { page = 1, limit = 10 } = req.query;

    try {

        const users = await prisma.user.findMany({
            skip: (page - 1) * limit,
            take: parseInt(limit)
        });
        res.json(users);

    }catch(error){
        console.log("Error getting users", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export const updateUser = async (req, res) => {
    const {id} = req.params;
    const {data } = req.body;

    try{
        const updateUser = await prisma.user.update({
            data:data
        })

        res.status(200).json({message: "User updated successfully"});
    }catch(error){
        console.log("Error updating user",error)
    }
}

export const searchUsers = async (req, res) => {
    const { query} = req.query;

    try{

        const users = await prisma.user.findMany({
            where:{
                OR:[
                    {firstName: {contains: query}},
                    {lastName: {contains: query}},
                    {country: {contains: query}},
                    {city: {contains: query}}
                ]
            }
        })

        res.status(200).json(users);

    }catch(error){
        console.log("Error searching userd", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export const deleteUser = async (req, res) => {
    const {id} = req.params;
    try{
        const deleteUser = await prisma.user.delete({
            where: {id: parseInt(id)}
        })
        res.status(200).json({message: "User deleted successfully"});
    }catch(error){
        console.log("Error deleting user",error)
        res.status(500).json({message: "Internal server error"});
    }
}

