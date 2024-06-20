import express from "express"
import db from "../Database/db.js"

const put = express.Router()

put.get("/edit/:id",(req,res)=>{
    const {id} = req.params
    db.findById({_id:id}).then(e=>res.json(e))
})

export default put