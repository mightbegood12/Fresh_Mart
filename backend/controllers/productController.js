import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

//add
const addProduct = async (req, res) => {
  try {
    const { name, category, price, unit, description } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const allimages = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imageurls = await Promise.all(
      allimages.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    // console.log(name, category, description, price, unit);
    // console.log(imageurls);

    const productData = {
      name,
      description,
      price: Number(price),
      unit: JSON.parse(unit),
      images: imageurls,
      category,
      date: Date.now(),
    };
    // console.log(productData);

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product added to MongoDB database" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//list
const listProducts = async (req, res) => {
  try {
    const product = await productModel.find({});
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);

    res.json({ success: false, message: error.message });
  }
};
//remove
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({
      success: true,
      message: "Product removed from MongoDB database",
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
//single prod
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);

    res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProducts, removeProduct, singleProduct };
