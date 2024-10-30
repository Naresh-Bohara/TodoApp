import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    status: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending"
    }
}, {
    timestamps: true,
    autoCreate: true,
    autoIndex: true
})

const TodoModel = mongoose.model("Todo", TodoSchema);
export default TodoModel;