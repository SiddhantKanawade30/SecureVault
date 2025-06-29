const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const app = express()

mongoose.connect(process.env.MONGO_URL)


app.get("/",(req,res)=>{
    res.send("hello world")
})





app.listen(3000)