import { Router } from "express";
import { bodyValidator } from "../../middlewares/request-validator.middleware.js";
import { createTodoDto } from "./todo.request.js";
import todoCtrl from "./todo.controller.js";

const todoRouter = Router();

todoRouter.post("/create", bodyValidator(createTodoDto), todoCtrl.create)

export default todoRouter;