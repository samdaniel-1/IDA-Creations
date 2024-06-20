import express from "express"
import db from "../Database/db.js"

const deleter = express.Router()

deleter.delete("/delete/:id",(req,res)=>{
    const id = req.params.id
    db.findByIdAndDelete({_id:id},{})
    .then(()=>{
        res.send({status:"deleted"})
        console.log("deleted")
    })
})

export default deleter