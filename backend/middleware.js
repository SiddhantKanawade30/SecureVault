import express from "express"
import jwt from "jsonwebtoken"  
import dotenv from "dotenv";
dotenv.config();



export const userMiddleware = async(req,res,next) => {

const token = req.headers.token;
if(!token){
    return res.status(401).json({
        message: "Access denied. No token provided."
    })
}


try{
    const decodedToken = jwt.verify(token,process.env.USER_JWT)
    req.userId = decodedToken.id
    next()
}catch(e){
    message: "Invalid token";
      error: e.message
}
}