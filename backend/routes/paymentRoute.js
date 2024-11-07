import express from "express";
const router = express.Router();
import { createPaymentIntent } from "../controllers/paymentController.js";

router.post("/create-payment-intent", createPaymentIntent);

export default router;
