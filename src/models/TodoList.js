import mongoose, { model } from "mongoose";

const todoSchema= new mongoose.Schema({
    todo:{
        type:String
    }
})


export const Todo= model("Todo", todoSchema)