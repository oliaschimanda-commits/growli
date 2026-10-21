import prisma from "../../prisma/prisma.js";
import { json } from "node:stream/consumers";

export const createProduct = async (req, res) => {
    const { data:data} = req.body;

    try{
        const newProduct = await prisma.product.create({
            data:data
        })
        res.status(201).json(newProduct);
    }catch(error){
        console.log("Error creating product", error);
        res.status(500).json({message: "Internal server error"})
    }
}

export const getProductById = async (req, res) => {
    const { id } = req.params;

    try{
        const product = await prisma.product.findUnique({
            where: { id: parseInt(id)},
        });
        if(!product){
            return res.status(404).json({ message: 'product not found' }); 
        }
        res.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//use this only for testing purposes. and you are sure the database is small
export const getAllProducts = async (req, res) => {

    try {

        const products = await prisma.product.findMany();
        res.json(products);

    }catch(error){
        console.log("Error getting products", error);
        res.status(500).json({message: "Internal server error"});
    }
}

//advised to use this method when getting users to void performance issues when the database grows
export const getProducts = async (req, res) => {

    const { page = 1, limit = 10 } = req.query;

    try {

        const products = await prisma.product.findMany({
            skip: (page - 1) * limit,
            take: parseInt(limit)
        });
        res.json(products);

    }catch(error){
        console.log("Error getting products", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export const updateProduct = async (req, res) => {
    const {id} = req.params;
    const {data } = req.body;

    try{
        const updateProduct = await prisma.product.update({
            data:data
        })

        res.status(200).json({message: "product updated successfully"});
    }catch(error){
        console.log("Error updating product",error)
        res.status(500).json({message:"Internal server error"})
    }
}

export const searchProducts = async (req, res) => {
    const { query} = req.query;

    try{

        const products = await prisma.product.findMany({
            where:{
                OR:[
                    {productName: {contains: query}},
                    {farmersName: {contains: query}}
                ]
            }
        })

        res.status(200).json(products);

    }catch(error){
        console.log("Error searching products", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    try{
        const product = await prisma.product.delete({
            where: {id: parseInt(id)}
        })
        res.status(200).json({message: "Product deleted successfully"});
    }catch(error){
        console.log("Error deleting product",error)
        res.status(500).json({message: "Internal server error"});
    }
}

