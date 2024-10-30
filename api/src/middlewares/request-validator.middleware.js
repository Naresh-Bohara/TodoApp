import HttpStatus from "../constants/http-status.constants.js";

const bodyValidator = (schemaDto)=>{
    return async (req, res, next)=>{
        try{
            let data = req.body;

            await schemaDto.validateAsync(data, {abortEarly: false});
            next();

        }catch(exception){
            let msg = {}

            //exception details
            if (exception.details) {
                exception.details.forEach((error) => {
                    msg[error.context.label] = error.message
                })
            }

            next({detail: msg,
                 statusCode: HttpStatus.BAD_REQUEST.statusCode,
                 message: "Validation Failed",
                 status: HttpStatus.BAD_REQUEST.status })
        }
    }
}

export {bodyValidator}