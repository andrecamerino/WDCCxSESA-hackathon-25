import mongoose from "mongoose";

const { Schema } = mongoose;

const childSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  money: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

export default mongoose.models.Child || mongoose.model("Child", childSchema);