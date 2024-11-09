import { useCart, currency } from "../context/CartContext";
import CartItemDisplay from "../components/CartItemDisplay";
import { Link } from "react-router-dom";
import groupItemsById from "../Utils/groupItemsById";
import { SITE_CHARGES, DELIVERY_FEE } from "../constants/constant";
import { useState } from "react";
import { Title } from "../components/Title";

export default function Cart() {
  const { cartItems } = useCart();
  const groupedItems = groupItemsById(cartItems);
  const [checkout, setCheckout] = useState(false);

  // Calculate total price for all items in the cart
  const totalAmount = groupedItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setCheckout(true);
    if (checkout) setCheckout(false);
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="flex h-screen flex-col  items-center justify-center">
          <p className="uppercase text-2xl md:text-4xl">Your cart is empty</p>
          <div className="text-xl md:text-2xl text-red-600">
            <Link to="/">Browse Items</Link>
          </div>
          <hr className="border-none h-[1.8px] w-7 bg-gray-600" />
        </div>
      ) : (
        <div className="flex flex-col min-h-[80vh] md:flex-row gap-1">
          <div className="flex flex-col w-full md:w-2/4 p-2 my-4 ml-4">
            <Title titleText="Cart Items" />
            <CartItemDisplay groupedItems={groupedItems} />
          </div>
          <div className="h-[2px] w-auto md:h-auto  md:w-[2px] bg-gray-400 bg-opacity-40">
            {/* Vertical line */}
          </div>
          <div className="flex flex-col w-2/4 p-2 my-4 ml-4 h-vh">
            {/* Right column */}
            <Title titleText="Bill Details" />
            <div className="flex flex-col w-max gap-1 pt-4 mb-6">
              {groupedItems.map((item) => (
                <div
                  key={`${item.id}-${item.selectedUnit}`} // Just to ignore duplicate key for render warning from react
                  className="itemWrapper"
                >
                  <div className="text-lg md:text-xl text-semibold">
                    {item.name}
                    {"  "}
                    <div className="inline text-[8px] md:text-[12px]">
                      Unit:{item.selectedUnit}
                    </div>
                    {"  "}
                    <span className="text-gray-500 text-sm  ">X</span>{" "}
                    {item.quantity}
                  </div>
                  <p className="text-gray-500">
                    Item total: {currency}
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
              <hr className="border-none h-[1px] w-[12rem] bg-gray-600" />
              <p className="text-semibold text-gray-500">
                Delivery fee: {currency}
                {DELIVERY_FEE}
              </p>
              <p className=" text-semibold text-gray-500">
                Site Charges: {currency}
                {SITE_CHARGES}
              </p>
              <hr className="border-none h-[1px] w-[12rem] bg-gray-600" />
              <div className="font-bold text-lg mt-4">
                Total Amount: {currency}
                {(totalAmount + DELIVERY_FEE + SITE_CHARGES).toFixed(2)}
              </div>
            </div>
            {/* <hr className="border-none h-[2px] w-auto bg-gray-400" /> */}
            <div className="flex flex-row gap-4">
              <button
                onClick={handleCheckout}
                className="flex justify-center gap-2 items-center shadow-xl text-lg text-white bg-gray-600 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-orange-300 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
              >
                Checkout
                <svg
                  className="w-8 h-8 justify-end group-hover:rotate-90 text-gray-50 ease-linear duration-300 rounded-full group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-white group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button>
            </div>
            {checkout ? (
              <div className="mt-4 duration-550 ease-in-out">
                <Title titleText="Payment Options" />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </>
  );
}
