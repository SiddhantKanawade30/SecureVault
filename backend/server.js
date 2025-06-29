import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { userModel, passModel } from "./db.js";
import { jwt } from "jsonwebtoken"
import {bcrypt} from "bcrypt"
const app = express()
dotenv.config();
app.use(express.json());


mongoose.connect(process.env.MONGO_URL)


app.post("/signup",async(req,res)=>{
    const {userName , email , password } = req.body

    const hashedPass = await bcrypt.hash(password,1)

    await userModel.create({
        userName ,
        email,
        password : hashedPass
    })
    res.status(200).json({
        message : "signed up successfully!!"
    })

})

app.post("/login",async(req,res)=>{
    const {email , password} = req.body;

    const response = userModel.findOne({email})

    if(!response){
        message : 'user not found in our database'
        return 
    }

    const decodedPass = bcrypt.compare(password,response.password)

    if(decodedPass){
        const token = jwt.sign({
            id : response._id
        },process.env.USER_JWT) 

        res.status(200).json({
            message : "signed up sucessfully",
            token
        })
    }else{
        res.status(404).json({
            message : "incorrect password"
        })
    }


})





app.listen(3000)