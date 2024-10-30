import Joi from "joi";

const createTodoDto = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    description: Joi.string().optional(),
    status: Joi.string().valid("pending", "completed").optional(),
});

export { createTodoDto };
