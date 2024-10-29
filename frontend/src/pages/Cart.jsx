import { useCart, currency } from "../context/CartContext";
import CartItemDisplay from "../components/CartItemDisplay";
import { Link } from "react-router-dom";
import groupItemsById from "../Utils/groupItemsById";
import { SITE_CHARGES, DELIVERY_FEE } from "../constants/constant";

export default function Cart() {
  const { cartItems } = useCart();
  const groupedItems = groupItemsById(cartItems);

  // Calculate total price for all items in the cart
  const totalAmount = groupedItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="flex  h-screen flex-col my-4 ml-4">
          <p className="uppercase text-2xl">Your cart is empty</p>
          <div className="text-xl text-red-600">
            <Link to="/">Browse Items</Link>
          </div>
          <hr className="border-none h-[1.8px] w-7 bg-gray-600" />
        </div>
      ) : (
        <div className="flex flex-col h-screen  md:flex-row gap-1">
          <div className="flex flex-col w-full md:w-2/4 p-2 my-4 ml-4">
            <p className="uppercase text-xl  md:text-2xl">Cart Items</p>
            <hr className="border-none h-[1.8px] w-7 bg-gray-600" />
            <CartItemDisplay groupedItems={groupedItems} />
          </div>
          <div className="h-[2px] w-auto md:h-auto  md:w-[2px] bg-gray-400 bg-opacity-40">
            {/* Vertical line */}
          </div>
          <div className="flex flex-col w-2/4 p-2 my-4 ml-4 h-vh">
            {/* Right column */}
            <p className="uppercase text-xl md:text-2xl">Bill Details</p>
            <hr className="border-none h-[1.8px] w-7 bg-gray-600" />
            <div className="flex flex-col w-max gap-1 pt-4 mb-6">
              {groupedItems.map((item) => (
                <div key={item.id} className="itemWrapper">
                  <p className="text-lg md:text-xl text-semibold">
                    {item.name}
                    {"  "}
                    <span className="text-gray-500 text-sm  ">X</span>{" "}
                    {item.quantity}
                  </p>
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
            <div className="mt-4">
              <p className="uppercase text-xl md:text-2xl">Payments</p>
              <hr className="border-none h-[1.8px] w-7 bg-gray-600" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
