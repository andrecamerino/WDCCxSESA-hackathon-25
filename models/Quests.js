import mongoose from "mongoose";

const { Schema } = mongoose;

const questSchema = new Schema({
    task: {
        type: String,
        required: true,
    },
    reward: {
        type: Number,
        default: 0,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    confirmed: {
        type: Boolean,
        default: false,
    },
    person: {
        type: String,
        default: "",
    },
}, {
    timestamps: true, // adds createdAt and updatedAt fields automatically
});

// looks for Quest model, if it doesnt exist it makes a new model
export default mongoose.models.Quest || mongoose.model("Quest", questSchema);