import bycrypt from "bcrypt";
import validator from "validator";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY);
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const isMatch = await bycrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, message: "User Exists", token });
    } else {
      res.status(401).json({ success: false, message: "Invalid password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const isExist = await userModel.findOne({ email });
    if (isExist) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exist" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }
    //hashing

    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);
    const newUser = new userModel({
      name,
      password: hashedPassword,
      email,
    });
    const user = await newUser.save();

    const token = createToken(user._id);
    res.status(201).json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET_KEY);
      res.status(200).json({ success: true, token });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const getProfile = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await userModel.findById(decoded.id).select("-password");
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.json({ success: true, user });
    // console.log(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
const getUserOrder = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await userModel.findById(decoded.id).select("-password");
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    } else {
      res.json({ success: true, orderId: user.orderId });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateCart = async (req, res) => {
  const userId = req.params.id;
  const { cartData } = req.body;

  try {
    if (!cartData) {
      return res
        .status(400)
        .json({ success: false, message: "No cart information" });
    }
    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { $set: { cartData } }, // Replace the entire cartData array
      { new: true } // Return the updated user document
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    res.json({
      message: "Cart updated successfully",
      cartData: updatedUser.cartData,
    });
  } catch (error) {
    console.error("Error updating cartData:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};
const storeOrder = async (req, res) => {
  const userId = req.params.id;
  const { orderId } = req.body;
  try {
    if (!orderId) {
      return res
        .status(400)
        .json({ success: false, message: "No Order info information" });
    }
    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { $addToSet: { orderId } } // Updates existing array
      // { new: true } // Return the updated user document
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    res.json({
      success: true,
      message: "Order details updated successfully",
      orderId: updatedUser.orderId,
    });
  } catch (error) {
    console.error("Error updating orderId", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

export {
  loginUser,
  registerUser,
  adminLogin,
  getProfile,
  updateCart,
  storeOrder,
  getUserOrder,
};
