const HttpStatus = {
    NOT_FOUND: { statusCode: 404, message: "Not Found", status: "NOT_FOUND" },
    UNAUTHORIZED: { statusCode: 401, message: "Unauthorized", status: "UNAUTHORIZED" },
    INTERNAL_SERVER_ERROR: { statusCode: 500, message: "Internal Server Error", status: "INTERNAL_SERVER_ERROR" },
    BAD_REQUEST: { statusCode: 400, message: "Bad Request", status: "BAD_REQUEST" },
    UNPROCESSABLE_ENTITY: { statusCode: 422, message: "Unprocessable Entity", status: "UNPROCESSABLE_ENTITY" },
    OK: { statusCode: 200, message: "Success", status: "SUCCESS" }
};

export default HttpStatus;
