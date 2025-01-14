import React, { Suspense, useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import ProductDetails from "../components/ProductDetails";
import DynamicButton from "../components/DynamicButton";
import { useLocation, useParams } from "react-router-dom";
import { currency } from "../constants/constant.js";
import cacheImages from "../Utils/cacheImages.jsx";
import Policy from "../components/Policy";
import axios from "axios";
import { backendURL } from "../App.jsx";
import { toast } from "react-toastify";
export default function ItemView() {
  // const { state } = useLocation();
  const [item, setItem] = useState({});
  // const { item, categoryTitle } = state || {}; // Destructure item and category title from state
  let params = useParams();
  const productId = params.id;
  const [selectedUnit, setSelectedUnit] = useState();
  const [isloading, setIsloading] = useState(true);
  const [select, setSelect] = useState();

  const fetchProductById = async (productId) => {
    try {
      setIsloading(true);
      const response = await axios.post(backendURL + "/api/product/single", {
        productId,
      });
      if (response.data.success) {
        setItem(response.data.product);
        setIsloading(false);
      } else {
        toast.error(response.data.success);
        setIsloading(false);
      }
    } catch (error) {
      toast.error(error);
      setIsloading(false);
    }
  };

  useEffect(() => {
    if (item?.images) {
      setIsloading(true);
      setSelectedUnit(item.unit[0]);
      cacheImages(item.images)
        .then(() => {
          setIsloading(false);
        })
        .catch(() => {
          setIsloading(false);
        });
    }
  }, [item.images, item.unit]);

  useEffect(() => {
    fetchProductById(productId);
  }, [productId]);

  return (
    <Suspense>
      <div className="h-max justify-center">
        <div className="h-auto md:min-h-screen flex flex-col md:flex-row justify-between">
          {isloading ? (
            <div className="md:w-[50%] h-full my-[4rem] md:my-[20rem] flex items-center justify-center">
              <HashLoader
                color="#e84d0e"
                className="p-20"
                size={200}
                speedMultiplier={4}
              />
            </div>
          ) : (
            <div className="item-img-cont h-auto md:min-h-screen w-full md:w-[50%] p-4 md:p-8 flex flex-col gap-5 justify-center items-center">
              <div className="big-img">
                <img
                  src={select || item.images[0]}
                  className="min-h-[18rem] md:max-h-[30rem] object-cover object-center transition-opacity duration-300 ease-in-out"
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
              <div className="hidden md:flex w-full">
                <ProductDetails
                  productDescription={item.description}
                  itemName={item.name}
                />
              </div>
            </div>
          )}
          <div className="h-full w-[1px] bg-gray-400 bg-opacity-40">
            {/* vr line */}
          </div>

          <div className="item-info h-full sticky top-20 w-screen-sm md:w-[50%] p-4 md:p-8  flex gap-2 flex-col">
            <div className="category text-gray-500 text-sm">
              {item.category || "Unknown Category"}
            </div>
            <div className="title text-2xl font-bold ">
              {item.name || "Loading"}
            </div>
            <div className="price text-lg">{`${currency}${
              item.price || "Loading"
            }`}</div>
            <div className="w-full h-[1px] bg-gray-300 bg-opacity-40">
              {/* hr line */}
            </div>
            <div className="quantity flex gap-2 flex-col">
              <div className="text-sm font-semibold">Select Unit</div>
              <div className="quantity-container flex gap-2 mb-2">
                {item.unit ? (
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
            <div className="w-80 md:w-96">
              <Policy />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
