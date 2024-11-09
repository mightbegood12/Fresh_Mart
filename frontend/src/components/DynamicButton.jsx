import React from "react";
import { useCart } from "../context/CartContext"; // Import the cart context

export default function DynamicButton({ item, selectedUnit }) {
  const { cartItems, addToCart, removeFromCart } = useCart(); // Use cart context

  const handleAddToCart = (e) => {
    // e.stopPropagation();
    addToCart({ ...item, selectedUnit: selectedUnit });
    // adds item to the cart along with the selectedUnit (DEFAULT its unit[0])
  };

  const handleRemoveFromCart = () => {
    removeFromCart(item.id, selectedUnit); // Remove item by its ID from the cart
  };

  // Filter cartItems for the specific item by matching its ID for specific product in the BUTTON
  let itemInCart = cartItems.filter((cartItem) => cartItem.id === item.id);

  return (
    <>
      {itemInCart.length > 0 ? (
        <div className="h-10 w-14  md:w-[68px] flex flex-none justify-center items-center gap-[4px] bg-red-600 text-white rounded-lg">
          <button
            className="h-10 w-[20px] text-[14px] py-[2px] border-2 text-white bg-red-600  hover:bg-red-500 ease-in duration-150 border-red-600 border-opacity-85 rounded-lg text-center cursor-pointer"
            onClick={handleRemoveFromCart}
          >
            -
          </button>
          <div className="text-sm w-[20px] text-center">
            {item.quantity ? item.quantity : itemInCart.length}
          </div>
          <button
            className="h-10 w-[20px] text-[14px] py-[2px] border-2 text-white bg-red-600  hover:bg-red-500 ease-in duration-150 border-red-600 border-opacity-85 rounded-lg text-center cursor-pointer"
            onClick={handleAddToCart}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="h-10 w-14  md:w-[68px] flex justify-center items-center gap-[3px] bg-red-600  hover:bg-red-500 text-white rounded-lg"
          onClick={handleAddToCart}
        >
          Add
        </button>
      )}
    </>
  );
}
