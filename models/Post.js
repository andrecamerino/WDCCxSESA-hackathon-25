import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {timestamps: true});

// looks for Post model, if it doesnt exist it makes a new model
export default mongoose.models.Post || mongoose.model("Post", postSchema);