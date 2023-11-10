import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const user = process.env.DB_USER 
const pass = process.env.DB_PASS

const mongoURL=`mongodb+srv://${user}:${pass}@todolist.ybvbdgx.mongodb.net/`

export const connectDB= async()=>{
    try{
        await mongoose.connect(mongoURL)
        console.log("conectado ao mongoDB com sucesso")
    }catch(error){
        console.log(error)
    }
}