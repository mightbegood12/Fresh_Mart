import orderModel from "../models/orderModel.js";

const createOrder = async (req, res) => {
  try {
    const { formData, paymentType, totalAmount, paymentStatus, orderedItems } =
      req.body;
    const newOrder = new orderModel({
      formData,
      paymentType,
      totalAmount,
      paymentStatus,
      orderedItems,
    });
    const order = await newOrder.save();
    res.status(201).json({ success: true, order });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

const listOrders = async (req, res) => {
  try {
    const order = await orderModel.find({});
    res.json({ success: true, order });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const fetchOrderById = async (req, res) => {
  try {
    const { orderId } = req.body;
    const order = await orderModel.findById(orderId);
    if (order) {
      res.json({ success: true, order });
    } else {
      res.json({ success: false, message: "No Order Found" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { createOrder, fetchOrderById, listOrders };
