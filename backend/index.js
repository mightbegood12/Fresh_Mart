import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectdatabase from "./config/mongodbconfig.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import connectCloudinary from "./config/cloudinaryconfig.js";
import paymentRouter from "./routes/paymentRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

connectdatabase();
connectCloudinary();

app.use(express.json());
app.use(cors());
app.use("/api/order", orderRouter);
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/payments", paymentRouter);

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
