import mongoose, { model } from "mongoose";

const todoSchema= new mongoose.Schema({
    todo:{
        type:String,
    },
    completed:{
        type:Boolean,
        default:false
    }
})


export const Todo= model("Todo", todoSchema)