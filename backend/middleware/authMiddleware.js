import jwt from "jsonwebtoken";



export const authenticate = async (req, res,next) => {

    const token = req.headers.authorization;

    if(!token){
        console.log("No token provided")
        return res.status(400).json({message: "No token provided"});
    }

    try {
        req.user = jwt.verify(token,process.env.JWT_SECRET);
        console.log('User verified')
        next();
    } catch (error) {
        res.status(400).json({message: "Invalid token"})
        console.log("Invalid token")
    }
}