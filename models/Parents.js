import mongoose from "mongoose";

const { Schema } = mongoose;

const parentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    childrenIds: [{
        type: Schema.Types.ObjectId,
        ref: 'Child',
    }],
}, {timestamps: true});

export default mongoose.models.Parent || mongoose.model("Parent", parentSchema);