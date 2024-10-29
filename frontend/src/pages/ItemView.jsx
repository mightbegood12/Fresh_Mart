import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import ProductDetails from "../components/ProductDetails";
import DynamicButton from "../components/DynamicButton";
import { useLocation } from "react-router-dom";
import { currency } from "../context/CartContext";

export default function ItemView() {
  const { state } = useLocation();
  const { item, categoryTitle } = state || {}; // Destructure item and category title from state
  const [selectedUnit, setSelectedUnit] = useState(item?.unit[0]);

  const [isloading, setIsloading] = useState(true);
  const [select, setSelect] = useState(
    item?.images[0] || "/assets/placeholder.png"
  );

  useEffect(() => {
    if (item?.images) {
      cacheImages(item.images);
    }
  }, [item?.images]);

  const cacheImages = (srcArray) => {
    const promises = srcArray.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(promises)
      .then(() => setIsloading(false))
      .catch(() => setIsloading(false));
  };

  return (
    <div className="h-auto justify-center">
      <div className="wrapper flex m-2 p-2 flex-col md:flex-row justify-between md:gap-8">
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
          <div className="item-img-cont w-full md:w-[50%] p-4 md:p-8 flex flex-col gap-5 justify-center items-center">
            <div className="big-img">
              <img
                src={select}
                className="min-h-[18rem] md:min-h-[24rem] object-cover object-center transition-opacity duration-300 ease-in-out"
                alt={item.name}
              />
            </div>

            <div className="sml-imgs flex flex-row gap-2 md:gap-5 items-start justify-start">
              {item.images.map((img, i) => (
                <div
                  key={i}
                  className={`border p-3 rounded-lg hover:scale-110 hover:bg-gray-300 hover:bg-opacity-20 duration-200 ${
                    select === img ? "border-gray-400" : "border-transparent"
                  }`}
                  onClick={() => setSelect(img)}
                >
                  <img
                    className="object-cover object-center rounded-lg hover:cursor-pointer max-w-16 max-h-12"
                    src={img}
                    alt="img"
                  />
                </div>
              ))}
            </div>
            <div className="hidden md:flex">
              <ProductDetails productDescription={item.productDescription} />
            </div>
          </div>
        )}
        <div className="h-full w-[1px] bg-gray-400 bg-opacity-40">
          {/* vr line */}
        </div>

        <div className="item-info w-max md:w-[50%] p-8 flex gap-2 flex-col">
          <div className="category text-gray-500 text-sm">
            {categoryTitle || "Unknown Category"}
          </div>
          <div className="title text-2xl font-bold ">{item.name}</div>
          <div className="price text-lg">{`${currency}${item.price.toFixed(
            2
          )}`}</div>
          <div className="w-full h-[1px] bg-gray-300 bg-opacity-40">
            {/* hr line */}
          </div>
          <div className="quantity flex gap-2 flex-col">
            <div className="text-sm font-semibold">Select Unit</div>
            <div className="quantity-container flex gap-2 mb-2">
              {item.unit.length > 0 ? (
                item.unit.map((unit, i) => (
                  <button
                    className={`text-sm h-auto p-2 text-center px-3 rounded-lg border-[1px] cursor-pointer border-gray-500 border-opacity-30 hover:scale-110  hover:bg-orange-300 hover:bg-opacity-20 duration-200 ${
                      selectedUnit === unit
                        ? "scale-110 bg-orange-300 bg-opacity-40"
                        : ""
                    }`}
                    onClick={() => setSelectedUnit(unit)}
                    key={i}
                  >
                    {unit}
                  </button>
                ))
              ) : (
                <div className="text-sm h-auto p-2 text-center px-3 rounded-lg border-[1px]">
                  No unit available
                </div>
              )}
            </div>
            <DynamicButton item={item} selectedUnit={selectedUnit} />
          </div>
        </div>
      </div>
    </div>
  );
}
