import express from "express";
import {
  createOrder,
  fetchOrderById,
  listOrders,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/create", createOrder);
orderRouter.post("/getOrder", fetchOrderById);
orderRouter.get("/list-order", listOrders);

export default orderRouter;
