import HttpStatus from "../../constants/http-status.constants.js";
import todoSvc from "./todo.service.js"

class TodoController {
    create = async(req, res, next)=>{
        try{
            const formattedData = await todoSvc.transformCreateTodo(req.body)
            const todo = await todoSvc.createTodo(formattedData);

            res.json({
                data: todo,
                message: "Todo created successfully!",
                status: HttpStatus.OK.status,
                options: null
            })
        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
}

const todoCtrl = new TodoController();
export default todoCtrl;