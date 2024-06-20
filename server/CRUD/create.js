import express from "express";
import db from "../Database/db.js";

const create = express.Router()


create.post("/create",(req,res)=>{
    const {name,clas,age,number,organname,nationality,comments} = req.body
    const menu = new db({name,clas,age,number,organname,nationality,comments})
    menu.save()
    res.send({status:"inserted"})
    console.log("Created")
})

export default create
