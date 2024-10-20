import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

//add
const addProducts = async (req, res) => {
  try {
    const { name, description, price, unit } = req.body;
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
    console.log(name, description, price, unit);
    console.log(imageurls);

    const productData = {
      name,
      description,
      price: Number(price),
      unit: JSON.parse(unit),
      images: imageurls,
      date: Date.now(),
    };
    console.log(productData);
    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, mssg: "Product added" });
  } catch (error) {
    console.log(error);

    res.json({ success: false });
  }
};

//list
const listProducts = async (req, res) => {
  try {
    const product = await productModel.find({});
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);

    res.json({ success: false });
  }
};
//remove
const removeProducts = async (req, res) => {
  try {
    const product = await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, mssg: "product removed" });
  } catch (error) {
    console.log(error);

    res.json({ success: false });
  }
};
//single prod
const singleProducts = async (req, res) => {
  try {
    const { productid } = req.body;
    const product = await productModel.findById(productid);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);

    res.json({ success: false });
  }
};

export { addProducts, listProducts, removeProducts, singleProducts };
