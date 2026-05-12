import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  table: { type: Number, required: true },
  items: { type: String, required: true },
  total: { type: String, required: true },
  status: { type: String, default: "preparing" },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
