import { Router } from "express";
import todoRouter from "../modules/todo/todo.router.js";

const router = Router()

router.use("/todo", todoRouter)

export default router;