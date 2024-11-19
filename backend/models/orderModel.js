import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    formData: {
      type: Object,
      required: true,
    },
    paymentType: {
      type: String,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const orderModel = mongoose.model.order || mongoose.model("order", orderSchema);
export default orderModel;
