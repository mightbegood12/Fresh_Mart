import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import ProductDetails from "../components/ProductDetails";
import { useLocation } from "react-router-dom";

export default function ItemView() {
  const { state } = useLocation();
  const { item, categoryTitle } = state || {};

  // Set the initial selected image from the item, or a placeholder if not provided
  const [select, setSelect] = useState(
    item.images[0] || "/assets/placeholder.png"
  );
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    cacheImages(item.images);
  }, [item.images]);

  const cacheImages = (srcArray) => {
    const promises = srcArray.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src.src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(promises)
      .then(() => setIsloading(false))
      .catch(() => setIsloading(false));
  };

  const handleAddToCart = () => {
    console.log(`Added ${item.name} to cart`);
    // Implement cart functionality
  };

  return (
    <>
      <div className="flex h-auto justify-center">
        <div className="wrapper flex m-2 p-2 flex-row justify-between gap-8">
          {isloading ? (
            <HashLoader
              color="#70ff00"
              size={120}
              cssOverride={{
                height: "22rem",
                width: "18rem",
                top: "2rem",
                right: "14rem",
              }}
              speedMultiplier={4}
            />
          ) : (
            <div className="item-img-cont flex-grow w-[50%] p-8 flex flex-col gap-5 justify-center items-center">
              <div className="big-img">
                <img
                  src={select}
                  className="h-[24rem] w-[24rem] object-cover object-center transition-opacity duration-300 ease-in-out"
                  alt={item.name}
                />
              </div>

              <div className="sml-imgs flex flex-row gap-5 items-start justify-start">
                {item.images.map((img, i) => (
                  <div
                    key={i}
                    className={`border p-3 rounded-lg hover:scale-110 hover:bg-gray-300 hover:bg-opacity-20 duration-200 ${
                      select === img ? "border-gray-400" : "border-transparent"
                    }`}
                    onClick={() => setSelect(img)}
                  >
                    <img
                      className="object-cover object-center rounded-lg hover:cursor-pointer w-16 h-12"
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                    />
                  </div>
                ))}
              </div>
              <div>
                <ProductDetails />
              </div>
            </div>
          )}
          <div className="h-full w-[1px] bg-gray-300 bg-opacity-40">
            {/* hr line*/}
          </div>

          <div className="item-info w-[50%] p-8 flex gap-2 flex-col">
            <div className="category text-gray-500 text-sm">
              {categoryTitle || "Unknown Category"}
            </div>
            <div className="title text-2xl font-bold ">{item.name}</div>
            <div className="price text-lg">{`$${item.price.toFixed(2)}`}</div>
            <div className="w-full h-[1px] bg-gray-300 bg-opacity-40">
              {/* vr line*/}
            </div>
            <div className="quantity flex gap-2 flex-col">
              {" "}
              <div className="text-sm font-semibold ">Select Unit</div>
              <div className="quantity-container flex gap-2">
                {item.unit.map((unit, i) => (
                  <span
                    className="text-sm p-2 text-center px-3 rounded-lg border-[1px] cursor-pointer border-gray-500 border-opacity-30 hover:scale-110 hover:bg-gray-300 hover:bg-opacity-20 duration-200"
                    key={i}
                  >
                    {unit}
                  </span>
                ))}
              </div>
            </div>

            <button
              className="h-10 w-fit p-2 mt-4 bg-red-600 text-white rounded-lg cursor-pointer hover:bg-red-700 transition-colors duration-300"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
