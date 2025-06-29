import express from "express"
import jwt from "jsonwebtoken"  
import dotenv from "dotenv";
dotenv.config();



export const userMiddleware = async(req,res,next) => {

const token = req.headers.token;
const decodedToken = await jwt.verify(token,process.env.USER_JWT)

if(decodedToken){
    req.userId = decodedToken.id
    next()
}else{
    res.json({
        message : "acess rejected"
})

}
}