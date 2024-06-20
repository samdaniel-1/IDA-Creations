import express from "express"
import db from "../Database/db.js"

const update = express.Router()

update.put("/update/:id",(req,res)=>{
    const id = req.params.id
    const {name,age,clas,number,organname,nationality,comments} = req.body
    const a = db.findByIdAndUpdate({_id:id},{name:name,clas:clas,age:age,number:number,organname:organname,nationality:nationality,comments:comments})
    .then(()=>{
        res.send({status:"updated"})
        console.log("Updated", name,clas,age,id,a)
    })
    // res.send({status:"updated"})
    
    


})

export default update 