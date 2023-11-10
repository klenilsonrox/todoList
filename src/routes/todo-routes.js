import { Router } from "express";
import { completeTodo, createTodo, deleteTodo, getAllTodo,getOneTodo, updateTodo } from "../controllers/Todo-controller.js";

const router = Router()

router.get("/todos", getAllTodo)
router.get("/todos/:id", getOneTodo)
router.post("/todos", createTodo)
router.put("/todos/:id", updateTodo)
router.delete("/todos/:id", deleteTodo)
router.put("/todos/:id", completeTodo)


export default router