import mongoose from "mongoose";

const { Schema } = mongoose;

const childSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    money: {
        type: Number,
        default: 0,
    }
}, {timestamps: true});

export default mongoose.models.Child || mongoose.model("Child", childSchema);