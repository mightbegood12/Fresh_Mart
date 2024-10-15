import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import ProductDetails from "../components/ProductDetails";
import DynamicButton from "../components/DynamicButton";
import cacheImages from "../Utils/ImageLoader";
import { useLocation } from "react-router-dom";

export default function ItemView() {
  const { state } = useLocation();
  const { item, categoryTitle } = state || {}; // Destructure item and category title from state

  const [isloading, setIsloading] = useState(true);
  const [select, setSelect] = useState(item.images[0]);

  useEffect(() => {
    cacheImages(item.images)
      .then(() => {
        console.log("All images loaded successfully!");
        setIsloading(false);
      })
      .catch(() => {
        console.error("Error loading images");
        setIsloading(false);
      });
  }, [item.images]);

  return (
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
          {/* vr line */}
        </div>

        <div className="item-info w-[50%] p-8 flex gap-2 flex-col">
          <div className="category text-gray-500 text-sm">
            {categoryTitle || "Unknown Category"}
          </div>
          <div className="title text-2xl font-bold ">{item.name}</div>
          <div className="price text-lg">{`$${item.price.toFixed(2)}`}</div>
          <div className="w-full h-[1px] bg-gray-300 bg-opacity-40">
            {/* hr line */}
          </div>
          <div className="quantity flex gap-2 flex-col">
            <div className="text-sm font-semibold">Select Unit</div>
            <div className="quantity-container flex gap-2">
              {item.unit ? (
                item.unit.map((unit, i) => (
                  <span
                    className="text-sm h-auto p-2 text-center px-3 rounded-lg border-[1px] cursor-pointer border-gray-500 border-opacity-30 hover:scale-110 hover:bg-gray-300 hover:bg-opacity-20 duration-200"
                    key={i}
                  >
                    {unit}
                  </span>
                ))
              ) : (
                <div className="text-sm h-auto p-2 text-center px-3 rounded-lg border-[1px]">
                  No unit available
                </div>
              )}
            </div>
          </div>
          <DynamicButton item={item}></DynamicButton>
        </div>
      </div>
    </div>
  );
}
