import { Todo } from "../models/TodoList.js";


export const createTodo = async(req,res)=>{
    const {todo}=req.body
    try{
       await Todo.create({todo})
       res.status(200).json(todo)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

export const getAllTodo = async(req,res)=>{
    try{
        const todos = await Todo.find()
        res.status(200).json(todos)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

export const getOneTodo = async(req,res)=>{
    try{
        const todoExist = await Todo.findById(req.params.id)
        if(!todoExist){
            return res.status(404).json({message:"Tarefa não encontrada"})
        }
        res.status(200).json(todoExist)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

export const updateTodo = async(req,res)=>{
    try{
        const todoExist = await Todo.findById(req.params.id)
        if(!todoExist){
            return res.status(404).json({message:"Tarefa não encontrada"})
        }

        await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(req.body)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}


export const deleteTodo = async(req,res)=>{
    try{
        const todoExist = await Todo.findById(req.params.id)
        if(!todoExist){
            return res.status(404).json({message:"Tarefa não encontrada"})
        }

        await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"tarefa deletada com sucesso"})
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}