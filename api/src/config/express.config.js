import express from "express";
import HttpStatus from "../constants/http-status.constants.js";
import "./db.config.js"
import router from "./todo.config.js";

const application  = express();

//parsers
application.use(express.json());
application.use(express.urlencoded({extended: true}))

//health-check
application.use("/health", (request, response)=>{
    response.json({
        status: "healthy",
        message: "It's perfectly good..."
    })
})

// main router 
application.use("/api/v1", router);

// 404 Not Found Handler
application.use((req, res, next) => {
    next({
        statusCode: HttpStatus.NOT_FOUND.statusCode,
        message: HttpStatus.NOT_FOUND.message,
        status: HttpStatus.NOT_FOUND.status
    });
});

// Error handling middleware
application.use((error, request, response, next) =>{
    console.log("Error: ", error);
    
    let statusCode = error.statusCode || HttpStatus.INTERNAL_SERVER_ERROR.statusCode;
    let message = error.message || HttpStatus.INTERNAL_SERVER_ERROR.message;
    let status = error.status || HttpStatus.INTERNAL_SERVER_ERROR.status
    let data = error.detail || null

    response.status(statusCode).json({
        data:data,
        message:message,
        status: status,
        options: null
    })

})

export default application;