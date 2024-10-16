import { useCart } from "../context/CartContext";
import CartItemDisplay from "../components/CartItemDisplay"; // Capitalized component name
import { Link } from "react-router-dom";
import groupItemsById from "../Utils/groupItemsById";

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
        <div className="flex justify-center flex-col my-4 ml-4">
          <p className="uppercase text-2xl">Your cart is empty</p>
          <div className="text-xl text-red-600">
            <Link to="/">Browse Items</Link>
          </div>
          <hr className="border-none h-[1.8px] w-7 bg-gray-600" />
        </div>
      ) : (
        <div className="flex flex-row gap-5">
          <div className="flex flex-col w-2/4 p-2 my-4 ml-4">
            <p className="uppercase text-2xl">Cart Items</p>
            <hr className="border-none h-[1.8px] w-7 bg-gray-600" />
            <CartItemDisplay groupedItems={groupedItems} />
          </div>
          <div className="h-auto w-[2px] bg-gray-400 bg-opacity-40">
            {/* Vertical line */}
          </div>
          <div className="flex flex-col w-2/4 p-2 gap-2 my-4 ml-4">
            <p className="uppercase text-2xl">Bill Details</p>
            <hr className="border-none h-[1px] w-7 bg-gray-600" />
            <div className="flex flex-col gap-2">
              {groupedItems.map((item) => (
                <div key={item.id} className="itemWrapper">
                  <p className="text-xl text-semibold">{item.name}</p>
                  <p className="text-gray-500">
                    Item total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
              <div className="font-bold text-lg mt-8">
                Total Amount: ${totalAmount.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
