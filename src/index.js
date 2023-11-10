import express from "express"
import dotenv from "dotenv"
import cors from "express"
import router from "./routes/todo-routes.js"
import { connectDB } from "./config/connectDB.js"

dotenv.config()

const port = process.env.DB_PORT

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)
app.use("/", (req,res)=>{
    res.status(200).json({
        status:"OK"
    })
})


connectDB()

app.listen(port || 3000)