import React, { useEffect, useState } from "react";
import ProductUnits from "../components/ProductUnits";
import ScaleLoader from "react-spinners/ScaleLoader";
import cacheImages from "../Utils/cacheImages.js";
import { toast } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../App.jsx";

const Add = ({ token }) => {
  // State for image previews
  const [images, setImages] = useState([
    "https://www.mariposakids.co.nz/wp-content/uploads/2014/08/image-placeholder2.jpg",
    "https://www.mariposakids.co.nz/wp-content/uploads/2014/08/image-placeholder2.jpg",
    "https://www.mariposakids.co.nz/wp-content/uploads/2014/08/image-placeholder2.jpg",
    "https://www.mariposakids.co.nz/wp-content/uploads/2014/08/image-placeholder2.jpg",
  ]);

  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    units: [],
    images: [],
  });

  useEffect(() => {
    if (images) {
      setIsLoading(true);
      cacheImages(images)
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  }, [images]);

  // Handle image changes
  const handleImageChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImages((prevImages) => {
        const newImages = [...prevImages];
        newImages[index] = imageURL;

        return newImages;
      });
      setProductData((prevData) => ({
        ...prevData,
        images: [
          ...prevData.images.slice(0, index),
          imageURL,
          ...prevData.images.slice(index + 1),
        ],
      }));
    }
  };

  // Handle product data input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle units input changes (when coming from the ProductUnits component)
  const handleUnitsChange = (newUnits) => {
    setProductData((prevData) => ({
      ...prevData,
      units: newUnits,
    }));
  };

  // Handle form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", productData.name);
      formData.append("price", productData.price);
      formData.append("category", productData.category);
      formData.append("unit", JSON.stringify(productData.units));
      productData.images[0] && formData.append("image1", productData.images[0]);
      productData.images[0] && formData.append("image2", productData.images[1]);
      productData.images[0] && formData.append("image3", productData.images[2]);
      productData.images[0] && formData.append("image4", productData.images[3]);
      formData.append("description", productData.description);

      console.log(formData);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );
      if (response.data.success) {
        toast.info("Product Added Successfully");
      } else {
        toast.error("Something Went Wrong");
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="m-2 p-2 flex flex-col gap-2">
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-2">
        <p>Upload Photos</p>
        <div className="form flex flex-row gap-2">
          {isLoading ? (
            <div className="w-96 h-[100px] flex items-center justify-center">
              <ScaleLoader />
            </div>
          ) : (
            images.map((image, index) => (
              <label htmlFor={`image${index + 1}`} key={index}>
                <img
                  className="h-[100px] w-[100px] object-cover object-center"
                  src={image}
                  alt={`Image ${index + 1}`}
                />
                <input
                  type="file"
                  id={`image${index + 1}`}
                  hidden
                  onChange={(event) => handleImageChange(index, event)}
                />
              </label>
            ))
          )}
        </div>

        <p>Product Details</p>

        <label htmlFor="name">
          <input
            type="text"
            id="name"
            name="name"
            className="px-2 py-1 border-gray-200 border-[1px] text-md"
            placeholder="Product name"
            value={productData.name}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="category">
          <input
            type="text"
            id="category"
            name="category"
            className="px-2 py-1 border-gray-200 border-[1px] text-md"
            placeholder="Product category"
            value={productData.category}
            onChange={handleInputChange}
          />
        </label>

        {/* Pass down handleUnitsChange to ProductUnits component to update units */}
        <ProductUnits
          units={productData.units}
          onUnitsChange={handleUnitsChange}
        />

        <label htmlFor="price">
          <input
            type="text"
            id="price"
            name="price"
            className="px-2 py-1 border-gray-200 border-[1px] text-md"
            placeholder="Price"
            value={productData.price}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="description">
          <textarea
            id="description"
            name="description"
            className="px-2 py-1 w-96 h-20 border-gray-200 border-[1px] text-md"
            placeholder="Product Description"
            value={productData.description}
            onChange={handleInputChange}
          />
        </label>

        <button
          type="submit"
          className="text-white bg-red-500 p-2 rounded-lg text-[15px] hover:bg-red-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
