import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const currency = "₹";

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    if (!item.selectedUnit) {
      toast.error("Please select a unit", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((cartItem) => cartItem.id === id);

      if (itemIndex === -1) return prevItems; // If item not found, return the cart as is

      const updatedItems = [...prevItems];
      updatedItems.splice(itemIndex, 1); // Remove the item at the found index
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, currency }}
    >
      {children}
    </CartContext.Provider>
  );
};
