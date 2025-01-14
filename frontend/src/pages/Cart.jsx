import { useCart } from "../context/CartContext";
import CartItemDisplay from "../components/CartItemDisplay";
import { Link, useNavigate } from "react-router-dom";
import groupItemsById from "../Utils/groupItemsById";
import { SITE_CHARGES, DELIVERY_FEE, currency } from "../constants/constant.js";
import { useState } from "react";
import { Title } from "../components/Title";
import FormComponent from "../components/FormComponent.jsx";
import { Flip, toast } from "react-toastify";
import axios from "axios";
import { backendURL } from "../App.jsx";

export default function Cart() {
  const { cartItems } = useCart();
  const groupedItems = groupItemsById(cartItems);
  const [checkout, setCheckout] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("Pending");
  const [formData, setFormData] = useState({
    value: "empty",
  });
  const user = localStorage.getItem("user");
  const userId = user ? JSON.parse(user)._id : "no user";

  const [selectedPayment, setSelectedPayment] = useState("");
  const navigate = useNavigate();

  // Calculate total price for all items in the cart
  let totalAmount = groupedItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  totalAmount = totalAmount + DELIVERY_FEE + SITE_CHARGES;

  const handleCheckout = () => {
    if (localStorage.getItem("user") && !checkout) {
      setCheckout(true);
    } else if (checkout) {
      setCheckout(false);
    } else {
      toast.dark("Please Login to continue!", {
        autoClose: 3000,
        position: "top-center",
      });
      setCheckout(false);
    }
  };

  const updateOrderInfo = async (id) => {
    try {
      const setOrderId = await axios.put(
        backendURL + `/api/user/${userId}/store-order`,
        {
          orderId: id,
        }
      );
      if (setOrderId.data.success) {
        console.log("Order Placed successfully!");
      } else {
        console.log("Error Placing Order!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.value === "empty") {
      toast.error("Fill Form data");
      return;
    } else {
      try {
        const orderResponse = await axios.post(
          backendURL + "/api/order/create",
          {
            formData,
            paymentType: selectedPayment,
            totalAmount,
            paymentStatus,
            orderedItems: cartItems,
          }
        );
        if (orderResponse.data.success) {
          toast.success("Order Placed Successfully!", {
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
            transition: Flip,
          });
          updateOrderInfo(orderResponse.data.order._id);
          setPaymentStatus(paymentStatus);
          localStorage.removeItem("cartData");
          navigate("/my-orders");
        } else {
          toast.error(orderResponse.data.message || "Order failed", {
            position: "top-center",
          });
        }
      } catch (e) {
        if (e.response) {
          toast.error(e.response.data.message || e.message, {
            position: "top-center",
          });
        }
      }
    }
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
          {!checkout ? (
            <div className="flex flex-col md:w-2/4 p-2 my-4 ml-4">
              <Title titleText="Cart Items" />
              <CartItemDisplay groupedItems={groupedItems} />
            </div>
          ) : (
            <div className="flex flex-col md:w-2/4 p-2 my-4 ml-4">
              <Title titleText="Delivery Information" />
              <FormComponent setFormInfo={setFormData} formData={formData} />
            </div>
          )}

          <div className="h-[2px] w-auto md:h-auto  md:w-[2px] bg-gray-400 bg-opacity-40">
            {/* Vertical line */}
          </div>
          <div className="flex flex-col md:w-2/4 p-2 my-4 ml-4 h-vh">
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
                {totalAmount.toFixed(2)}
              </div>
            </div>
            {/* <hr className="border-none h-[2px] w-auto bg-gray-400" /> */}
            <div className="flex flex-row gap-4">
              <button
                onClick={handleCheckout}
                className="flex justify-center gap-2 items-center shadow-xl text-lg text-white bg-red-600 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-orange-600 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
              >
                Checkout
                <svg
                  className="w-8 h-8 justify-end group-hover:rotate-[180deg] text-gray-50 ease-linear duration-300 rounded-full group-hover:border-none p-2 rotate-90"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-white"
                  ></path>
                </svg>
              </button>
            </div>
            {checkout ? (
              <div className="mt-4 duration-550 ease-in-out">
                <Title titleText="Payment Options" />
                <form
                  className="flex flex-col gap-4 p-6 rounded-lg"
                  onSubmit={handleSubmit}
                >
                  <h2 className="text-xl font-semibold text-gray-700">
                    Select Payment Method
                  </h2>
                  <div className="flex flex-col justify-center md:flex-row gap-4">
                    <div
                      onClick={() => {
                        toast.dark("We are working on it!", {
                          autoClose: 1500,
                        });
                      }}
                      className="flex flex-row flex-shrink-0 items-center gap-2 p-2 bg-gray unselectable border"
                    >
                      <input
                        type="radio"
                        id="razorpay"
                        name="payment"
                        value="Razorpay"
                        required
                        disabled
                        onChange={(e) => {
                          setSelectedPayment(e.target.value);
                        }}
                        className="h-5 w-5 text-blue-500 focus:ring-blue-400"
                      />
                      <label htmlFor="razorpay" className="text-gray-600">
                        <img
                          className="h-6 w-24"
                          src="https://latestlogo.com/wp-content/uploads/2024/01/razorpay-logo.png"
                          alt=""
                        />
                      </label>
                    </div>

                    <div
                      onClick={() => {
                        toast.dark("We are working on it!", {
                          autoClose: 1500,
                        });
                      }}
                      className="flex items-center flex-shrink-0 gap-2 p-2 bg-gray unselectable border"
                    >
                      <input
                        type="radio"
                        id="stripe"
                        name="payment"
                        value="Stripe"
                        required
                        disabled
                        onChange={(e) => {
                          setSelectedPayment(e.target.value);
                          toast.dark("We are working on it!", {
                            autoClose: 1500,
                          });
                        }}
                        className="h-5 w-5 text-blue-500 focus:ring-blue-400"
                      />
                      <label htmlFor="stripe" className="text-gray-600">
                        <img
                          src="https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png"
                          className="h-8 aspect-[16/9]"
                          alt=""
                        />
                      </label>
                    </div>

                    <div className="flex items-center flex-shrink-0 gap-2  p-2 bg-gray border">
                      <input
                        type="radio"
                        id="cashondelivery"
                        name="payment"
                        value="Cash on Delivery"
                        required
                        onChange={(e) => {
                          setSelectedPayment(e.target.value);
                        }}
                        className="h-5 w-5 text-blue-500 focus:ring-blue-400"
                      />
                      <label
                        htmlFor="cashondelivery"
                        className="text-gray-600 text-sm md:text-md font-bold"
                      >
                        Cash on Delivery
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-4 px-4 py-2 w-max md:w-80 self-center bg-orange-600 text-white rounded-lg hover:bg-red-600"
                  >
                    Place Order
                  </button>
                </form>
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
