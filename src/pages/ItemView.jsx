import React, { useState } from "react";
import { useParams } from "react-router-dom";

import t1 from "../assets/t1.jpg";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";
import t4 from "../assets/t4.jpg";
import t6 from "../assets/t6.jpg";
import ProductDetails from "../components/ProductDetails";

export default function ItemView() {
  const [select, setSelect] = useState(t6);
  const smallImages = [t1, t2, t3, t4];
  const { productId } = useParams();

  console.log(productId);
  return (
    <>
    <div className=" flex h-auto justify-center min-h-screen">
      <div className="wrapper flex m-5 p-2 flex-row gap-72">
        <div className="item-img-cont  h-[470px] w-[464px] p-8 flex flex-col gap-5 justify-center items-center">
        <div className="big-img">
            <img src={select} className="h-80" alt="" />
          </div>
          <div className="sml-imgs flex flex-row gap-5 items-start justify-start">
            {smallImages.map((img, i) => (
              <div
                key={i}
                className={`border p-3 rounded-lg transition-all duration-200 ${
                  select === img ? "border-gray-700" : "border-transparent"
                }`}
                onClick={() => setSelect(img)}
              >
                <img className="hover:cursor-pointer w-16 h-12" src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="item-info bg-slate-100 w-[464px]  p-8">
          <div className="category text-gray-500 text-sm">Milk</div>
          <div className="title text-xl font-semibold">Icecream</div>
          <div className="price">399</div>
        </div>
      </div>
    </div>
    <div className=" wrapper flex  p-2 flex-row gap-4">
      <div className=" item-img-cont  h-[464px] w-[464px] p-8 flex flex-col ml-14 gap-5 justify-center items-center">
          <ProductDetails />
        </div>
        </div>
    </>
  );
}
