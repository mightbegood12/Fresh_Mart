import React, { useState } from "react";
// import { useParams } from "react-router-dom";

import t1 from "/assets/t1.jpg";
import t2 from "/assets/t2.jpg";
import t3 from "/assets/t3.jpg";
import t4 from "/assets/t4.jpg";
import t6 from "/assets/t6.jpg";
import ProductDetails from "../components/ProductDetails";

export default function ItemView() {
  const [select, setSelect] = useState(t6);
  const smallImages = [t1, t2, t3, t4];
  // const { productId } = useParams();

  return (
    <>
      <div className=" flex h-auto  justify-center ">
        <div className="wrapper flex m-2 p-2 flex-row justify-between gap-8">
          <div className="item-img-cont flex-grow w-[50%] p-8 flex flex-col gap-5 justify-center items-center">
            <div className="big-img">
              <img
                src={select}
                className="h-[24rem] w-[24rem] object-cover object-center transition-opacity duration-300 ease-in-out"
                alt=""
              />
            </div>
            <div className="sml-imgs flex flex-row gap-5 items-start justify-start">
              {smallImages.map((img, i) => (
                <div
                  key={i}
                  className={`border p-3 rounded-lg  hover:scale-110 hover:bg-gray-300 hover:bg-opacity-20 duration-200 ${
                    select === img ? "border-gray-400" : "border-transparent"
                  }`}
                  onClick={() => setSelect(img)}
                >
                  <img
                    className="object-cover object-center rounded-lg hover:cursor-pointer w-16 h-12"
                    src={img}
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className="">
              <ProductDetails />
            </div>
          </div>
          <div className="h-full w-[1px] bg-gray-300 bg-opacity-40"></div>
          <div className="item-info sticky w-[50%] p-8">
            <div className="category text-gray-500 text-sm">Milk</div>
            <div className="title text-2xl font-semibold">Icecream</div>
            <div className="price text-lg">Price: $399</div>
            <button
              className="h-10 p-2  bg-red-600 text-white rounded-lg cursor-pointer"
              // onClick={}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
