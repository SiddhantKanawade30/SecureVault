import {express} from "express"
import {jwt} from "jsonwebtoken"  
import dotenv from "dotenv";
dotenv.config();



export const userMiddleware = (req,res,next) => {

const token = req.headers.token;
const decodedToken = jwt.verify(token,process.env.USER_JWT)

if(decodedToken){
    req.userId = decodedToken.id
    next()
}else{
    res.json({
        message : "acess rejected"
})

}
}