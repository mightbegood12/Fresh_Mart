import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectdatabase from "./config/mongodbconfig.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import connectCloudinary from "./config/cloudinaryconfig.js";
import paymentRoute from "./routes/paymentRoute.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

connectdatabase();
connectCloudinary();

app.use(express.json());
app.use(cors());
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/payments", paymentRoute);

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
