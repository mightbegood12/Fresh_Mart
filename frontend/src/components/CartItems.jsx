import React from "react";
import { useCart } from "../context/CartContext";
import { currency } from "../constants/constant.js";
import { NavLink } from "react-router-dom";
import BackIcon from "/assets/back.svg";

export default function CartItems() {
  const { cartItems } = useCart();

  return (
    <NavLink
      to="/cart"
      className={`w-[80%] ${
        cartItems.length > 0 ? "flex flex-row" : "hidden"
      } bg-orange-400 text-white rounded-xl h-16 focus:bg-orange-800 focus:bg-opacity-90 items-center justify-between px-4 p-2 m-auto md:hidden`}
    >
      <div className="flex flex-col gap-0 text-sm items-center justify-around">
        <div className="text-[14px]">{cartItems.length + " "}items</div>
        <div className="text-[1rem]">
          {currency}
          {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
        </div>
      </div>
      <div className="flex flex-row justify-center  items-center gap-1">
        <div>To Cart</div>
        <img className="rotate-180 h-6  filter invert" src={BackIcon} alt="" />
      </div>
    </NavLink>
  );
}
