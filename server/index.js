import express from "express"
import env from "dotenv"
import create from "./CRUD/create.js"
import cors from "cors"
import read from "./CRUD/read.js"
import put from "./CRUD/put.js"
import update from "./CRUD/update.js"
import deleter from "./CRUD/delete.js"


env.config()
const app = express()
app.use(cors())
app.use(express.json())

app.use('/',create)
app.use('/',read)
app.use('/',put)
app.use('/',update)
app.use('/',deleter)

app.listen(process.env.PORT || 23455 ,()=>console.log("Port connected to",process.env.PORT))
