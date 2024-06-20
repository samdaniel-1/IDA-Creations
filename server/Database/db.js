import mongoose from "mongoose";
import env from "dotenv"
env.config()
mongoose.connect(process.env.URL || `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.haib8mk.mongodb.net/${process.env.DATABASE}`)
.then(()=>console.log("MongoDB connected successfully"))
const schema = mongoose.Schema({
    name:String,
    clas:String,
    age:Number,
    number:String,
    organname:String,
    nationality:String,
    comments:String
})
const db = mongoose.model("IDAcreations",schema)

export default db
