import React, { useEffect, useState } from "react";
import { Title } from "../components/Title";
import { DELIVERY_FEE, SITE_CHARGES } from "../constants/constant";
import axios from "axios";
import { backendURL } from "../App.jsx";
import { toast } from "react-toastify";
import groupItemsById from "../Utils/groupItemsById.jsx";
export default function Orders() {
  const [orderInfo, setOrderInfo] = useState({});
  const [orderItemsId, setOrderItemsId] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchOrderbyUserId = async () => {
      try {
        if (token) {
          // console.log(token);
          const response = await axios.get(
            backendURL + "/api/user/order-info",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.data.success) {
            setOrderItemsId(response.data.orderId);
          } else {
            toast.error("No orders Placed!" || response.data.message);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchOrder = async (orderItemsId) => {
      try {
        const order = await axios.post(backendURL + "/api/order/getOrder", {
          orderId: orderItemsId,
        });
        if (order.data.success) {
          console.log(order);
          const orderinfo = order.data.order;
          setOrderItems(orderinfo.orderedItems);
        } else {
          setOrderItems();
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchOrderbyUserId();
    fetchOrder(orderItemsId[0]);
  }, [orderItemsId, token]);
  const groupedItems = orderItems ? groupItemsById(orderItems) : [];
  // console.log(groupedItems[0].price);
  const trackOrder = () => {
    toast.success("Changes Applied!", {
      theme: "colored",
      position: "top-center",
    });
  };

  return (
    <div className="flex flex-col gap-2 p-2 m-4 h-screen">
      <Title titleText="My Orders" />
      <div className="flex flex-col gap-2 m-4 ">
        <div className="hidden md:grid grid-cols-[1fr_2fr_2fr_2fr_1fr] place-content-center items-center py-1 px-2 border font-thin bg-gray-100 text-sm text-center">
          <b>Image</b>
          <b>Name</b>
          <b>Order Status</b>
          <b>Payment Method</b>
          <b>Track Order</b>
        </div>
        {orderItems && orderItems[0] !== "No order" && groupedItems ? (
          groupedItems.map((item, index) => (
            <div
              className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_2fr_2fr_2fr_1fr] place-content-center items-center gap-2 py-1 px-2 border text-sm text-center"
              key={index}
            >
              <img className="w-30" src={item.images[0]} alt={item.name} />
              <p>
                {item.name} x {item.quantity}{" "}
              </p>
              <p className="text-green-500">
                Ordered at {item.createdAt.slice(0, 10)}
              </p>
              <p>{orderInfo.paymentType}</p>
              <p
                type="button"
                className=" cursor-pointer text-white w-full bg-orange-600 px-2 py-1 rounded-lg"
                onClick={() => trackOrder()}
              >
                Track Order
              </p>
            </div>
          ))
        ) : (
          <div className="text-2xl text-center pt-2">No Items</div>
        )}
      </div>
      <div className="flex items-center border mb-8 p-2 justify-center text-xl">
        <span className="font-bold">Total Amount</span> :
        {groupedItems[0]
          ? "₹" +
            (
              groupedItems[0].price * groupedItems[0].quantity +
              DELIVERY_FEE +
              SITE_CHARGES
            ).toFixed(2)
          : " No Items"}
      </div>
      <Title titleText="Order History" />
      <div className="flex flex-col gap-2 m-4 ">
        <div className="hidden md:grid grid-cols-[1fr_2fr_2fr_1fr_2fr] items-center py-1 px-2 border font-thin bg-gray-100 text-sm text-center">
          <b>Image</b>
          <b>Name</b>
          <b>Order Status</b>
          <b>Price</b>
          <b>Payment Method</b>
        </div>
        <div className="flex items-center justify-center text-2xl font-bold pt-4">
          No Items
        </div>
      </div>
    </div>
  );
}
