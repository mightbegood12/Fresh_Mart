import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
  getProfile,
  updateCart,
  storeOrder,
  getUserOrder,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/login", loginUser);
userRouter.post("/register", registerUser);
userRouter.post("/admin", adminLogin);
userRouter.get("/profile", getProfile);
userRouter.put("/:id/cart", updateCart);
userRouter.put("/:id/store-order", storeOrder);
userRouter.get("/order-info", getUserOrder);

export default userRouter;
