import mongoose from "mongoose";

const { Schema } = mongoose;

const shopItemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imgSrc: {
      type: String,
      default: '',
    },
    stocks: {
      type: Number,
      default: 1,
    },
    uploadedBy: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.ShopItem ||
  mongoose.model("ShopItem", shopItemSchema);
