import TodoModel from "./todo.model.js";

class TododService {
    transformCreateTodo = async(req)=>{
        const data = req;
        try{
            const formattedData = {
                title: data.title,
                description: data.description,
                status: data.status
            }
            return formattedData;

        }catch(exception){
            throw (exception)
        }
    }

    createTodo = async(data)=>{
        try{
            const todoObj = new TodoModel(data);
            return await todoObj.save();
        }catch(exception){
            throw(exception);
        }
    }
}

const todoSvc = new TododService();
export default todoSvc;