import React from "react";
import { useCart } from "../context/CartContext"; // Import the cart context
import { useLocation } from "react-router-dom";

export default function Button() {
  const { state } = useLocation();
  const { item } = state || {};
  const { cartItems, addToCart, removeFromCart } = useCart(); // Use cart context
  const handleAddToCart = () => {
    addToCart(item); // Directly add item to cart using the context function
  };

  const handleRemoveFromCart = () => {
    removeFromCart(item.id); // Remove item by its ID from the cart
  };
  return (
    <>
      {cartItems.some((cartItem) => cartItem.id === item.id) ? (
        <div className="h-10 w-[100px]  p-2 mt-4 flex flex-none justify-center items-center gap-4 bg-red-600 text-white rounded-lg">
          <button
            className="cursor-pointer text-center px-2 hover:bg-red-700 transition-colors duration-300"
            onClick={handleRemoveFromCart}
          >
            -
          </button>
          <div className="text-sm text-center">{cartItems.length}</div>
          <button
            className="cursor-pointer text-center px-2 hover:bg-red-700 transition-colors duration-300"
            onClick={handleAddToCart}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="h-10 p-2 w-[96px] mt-4 bg-red-600 text-white rounded-lg cursor-pointer hover:bg-red-700 transition-colors duration-300"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      )}
    </>
  );
}
