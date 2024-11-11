import React from "react";

const Add = () => {
  return (
    <div className=" m-2 p-2 flex flex-col gap-2">
      <p>Upload Photos</p>
      <form className="form flex flex-row gap-2">
        <label htmlFor="image1">
          <img
            className="w-[100px]"
            src="https://www.mariposakids.co.nz/wp-content/uploads/2014/08/image-placeholder2.jpg"
          />
          <input type="file" id="image1" hidden />
        </label>
        <label htmlFor="image2">
          <img
            className="w-[100px]"
            src="https://www.mariposakids.co.nz/wp-content/uploads/2014/08/image-placeholder2.jpg"
          />
          <input type="file" id="image2" hidden />
        </label>
        <label htmlFor="image3">
          <img
            className="w-[100px]"
            src="https://www.mariposakids.co.nz/wp-content/uploads/2014/08/image-placeholder2.jpg"
          />
          <input type="file" id="image3" hidden />
        </label>
        <label htmlFor="image4">
          <img
            className="w-[100px]"
            src="https://www.mariposakids.co.nz/wp-content/uploads/2014/08/image-placeholder2.jpg"
          />
          <input type="file" id="image4" hidden />
        </label>
      </form>
      <p>Product Details</p>
      <form className="flex flex-col gap-2">
        <label htmlFor="name">
          <input
            type="text"
            className="px-2 py-1 border-gray-200 border-[1px] text-md"
            placeholder="Product name"
          />
        </label>
        <label htmlFor="name">
          <input
            type="text"
            className="px-2 py-1 border-gray-200 border-[1px] text-md"
            placeholder="Product category"
          />
        </label>
        <label htmlFor="unit">
        <div className="quantity-container flex gap-2 mb-2">
          <input type="text" className="px-2 py-1 border-gray-200 border-[1px] text-md" placeholder="unit" />
        </div>
        </label>
        <label htmlFor="name">
          <input
            type="text"
            className="px-2 py-1 border-gray-200 border-[1px] text-md"
            placeholder="Price"
          />
        </label>
        <label htmlFor="name">
          <input
            type="text"
            className="px-2 py-1 w-96 h-20 border-gray-200 border-[1px] text-md"
            placeholder="Product Description"
          />
        </label>
      </form>
    </div>
  );
};

export default Add;
