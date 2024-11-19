import orderModel from "../models/orderModel.js";

const createOrder = async (req, res) => {
  try {
    const { formData, paymentMethod, totalAmount } = req.body;
    const orderData = {
      formData,
      paymentMethod,
      totalAmount,
    };
  } catch (error) {}
};
