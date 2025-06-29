import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { userModel, passModel } from "./db.js";
import { userMiddleware } from "./middleware.js"
import  jwt  from "jsonwebtoken"
import bcrypt from "bcrypt"
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

    const response = await userModel.findOne({email})

    if(!response){
        return res.json({message : 'user not found in our database'})
         
    }

    const decodedPass = await bcrypt.compare(password,response.password)

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

app.post("/create",userMiddleware, async(req,res)=>{
        const { url , userName , password} = req.body

        try {
            await passModel.create({
                userId : req.userId,
                url,
                userName,
                password
            })

            res.status(201).json({
                message : "credentials created sucessfully"
            })
        }catch(e){
            console.error(e);
            res.json({
                message : "error occured is " + e.console.error()
            })
        }
})

app.delete("/delete" , userMiddleware , async(req,res)=>{

    const {credentialId} = req.body

    try{
        await passModel.deleteOne({
                _id : credentialId
        })
        res.json({
            message : "credentials deleted"
        })
    }catch{
        res.json({
            message : "There was a problem deleting credentials"
        })
    }

})

app.put("/edit" ,userMiddleware, async(req,res)=>{
    const {credentialId , url , userName , password} = req.body;

    try{
        await passModel.updateOne(
            {_id : credentialId},
            {
                $set : {
                    url ,
                    userName,
                    password
                }
            }
        )
        res.json({
            message : "edited credentials"
        })
    }catch{
        res.json({message : "there was some error editing credentials"})
    }
})

app.get("/vault" , userMiddleware , async(req,res)=>{
    const content = await passModel.find({
        userId : req.userId
    })

    res.json({
        content
    })
})


app.listen(3000)