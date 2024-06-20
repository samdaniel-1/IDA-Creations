import express from "express"
import db from "../Database/db.js"
const read = express.Router()

read.get("/read",(req,res)=>{
    db.find().then((e)=>res.send(e))
})

export default read