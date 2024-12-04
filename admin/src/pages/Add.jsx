import React, { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import cacheImages from "../Utils/cacheImages.js";
import { toast } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../App.jsx";

const Add = ({ token }) => {
  const image =
    "https://www.mariposakids.co.nz/wp-content/uploads/2014/08/image-placeholder2.jpg";

  const [isLoading, setIsLoading] = useState(true);
  const [isProductLoading, setProductLoading] = useState(false);

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [units, setUnits] = useState([]);

  // console.log(image1, image2, image3, image4);

  useEffect(() => {
    if (image) {
      setIsLoading(true);
      cacheImages(image)
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  }, [image]);

  // Handle units input changes (when coming from the ProductUnits component)
  const handleAddUnit = (e) => {
    setUnits([...units, ""]);
    // console.log(units);
  };

  const handleRemoveUnit = (index) => {
    setUnits(units.filter((_, i) => i !== index));
  };

  const handleUnitChange = (index, event) => {
    const newUnits = [...units];
    newUnits[index] = event.target.value;
    setUnits(newUnits);
  };

  // Handle form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      setProductLoading(true);
      formData.append("name", name);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("unit", JSON.stringify(units));
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);
      formData.append("description", description);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );
      if (response.data.success) {
        toast.info("Product Added Successfully");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setName("");
        setCategory("");
        setPrice("");
        setUnits([]);
        setDescription("");
        setProductLoading(false);
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
    <div className="w-[82%] flex flex-col gap-2 p-2">
      <p className="text-xl mt-1 font-semibold">Add Products</p>
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-2">
        <p>Upload Photos</p>
        {isLoading ? (
          <div className="w-96 h-[100px] flex items-center justify-center">
            <ScaleLoader />
          </div>
        ) : (
          <div className="form flex flex-row gap-2">
            <label htmlFor="image1">
              <img
                className="h-[100px] w-[100px] object-cover object-center"
                src={!image1 ? image : URL.createObjectURL(image1)}
                alt="upload Image"
              />
              <input
                type="file"
                id="image1"
                hidden
                onChange={(event) => setImage1(event.target.files[0])}
              />
            </label>
            <label htmlFor="image2">
              <img
                className="h-[100px] w-[100px] object-cover object-center"
                src={!image2 ? image : URL.createObjectURL(image2)}
                alt="upload Image"
              />
              <input
                type="file"
                id="image2"
                hidden
                onChange={(event) => setImage2(event.target.files[0])}
              />
            </label>
            <label htmlFor="image3">
              <img
                className="h-[100px] w-[100px] object-cover object-center"
                src={!image3 ? image : URL.createObjectURL(image3)}
                alt="upload Image"
              />
              <input
                type="file"
                id="image3"
                hidden
                onChange={(event) => setImage3(event.target.files[0])}
              />
            </label>
            <label htmlFor="image4">
              <img
                className="h-[100px] w-[100px] object-cover object-center"
                src={!image4 ? image : URL.createObjectURL(image4)}
                alt="upload Image"
              />
              <input
                type="file"
                id="image4"
                hidden
                onChange={(event) => setImage4(event.target.files[0])}
              />
            </label>
          </div>
        )}

        <p>Product Details</p>

        <label htmlFor="name">
          <input
            type="text"
            id="name"
            name="name"
            className="px-2 py-1 border-gray-200 border-[1px] text-md"
            placeholder="Product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label htmlFor="category">
          <input
            type="text"
            id="category"
            name="category"
            className="px-2 py-1 border-gray-200 border-[1px] text-md"
            placeholder="Product category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>

        <div className="quantity-container flex flex-col gap-2">
          {units.map((unit, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="text"
                className="px-2 py-1 border-gray-200 border-[1px] text-md"
                value={unit}
                onChange={(e) => handleUnitChange(index, e)}
                placeholder="Enter unit"
              />
              <button
                type="button"
                className="bg-red-500 text-white px-2 py-1 rounded-lg"
                onClick={() => handleRemoveUnit(index)}
                disabled={units.length === 1}
              >
                &#10006;
              </button>
            </div>
          ))}

          <button
            type="button"
            className="bg-green-500 w-60 text-white px-2 py-1 rounded-lg mt-2"
            onClick={handleAddUnit}
          >
            Add Unit
          </button>
        </div>

        <label htmlFor="price">
          <input
            type="number"
            id="price"
            name="price"
            className="px-2 py-1 border-gray-200 border-[1px] text-md"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <label htmlFor="description">
          <textarea
            id="description"
            name="description"
            className="px-2 py-1 w-96 h-20 border-gray-200 border-[1px] text-md"
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <button
          type="submit"
          className="text-white bg-red-500 w-60 p-2 rounded-lg text-[15px] hover:bg-red-600"
        >
          {isProductLoading ? "Loading..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default Add;
