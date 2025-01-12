import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import axios from "axios";
import { currency } from "../../constants";
function Orders() {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/order/list-order");
      if (response.data.success) {
        setList(response.data.order);
        // console.log(list);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchList();
  }, [list]);
  // console.log(list);
  return (
    <div className="flex flex-col h-max gap-2 ml-[18%] p-2 w-[82%]">
      {/* <Title titleText="My Orders" /> */}
      <div className="font-semibold text-xl p-2">Order Page</div>
      <div className="flex flex-col gap-2 m-4 ">
        <div className="hidden md:grid grid-cols-[1fr_1fr_1fr_1fr] items-center py-1 px-2 border font-thin bg-gray-100 text-sm text-center">
          <b>User Details</b>
          <b>Item Info</b>
          <b>Price</b>
          <b>Order Status</b>
        </div>
        {list
          ? list.map((item, index) => (
              <div
                className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm text-center"
                key={index}
              >
                <div className="flex flex-col items-start gap-1">
                  {/* {item.orderedItems.map((item, index) => {
                    <div key={index}>{item}</div>;
                  })} */}
                  <div>
                    {item.orderedItems[0].name} x {item.orderedItems.length}
                  </div>
                  <div className="font-bold">
                    {item.formData.firstName} {item.formData.lastName}
                  </div>
                  <div>
                    {item.formData.city}, {item.formData.country}
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div>Items : {item.orderedItems.length}</div>
                  <div>Method: {item.paymentType}</div>
                  <div>Payment: {item.paymentStatus}</div>
                  <div>Date : {item.createdAt.slice(0, 10)}</div>
                </div>
                <p className=" cursor-pointer text-right text-black px-2 py-1 rounded-lg md:text-center ">
                  {currency}
                  {item.totalAmount}
                </p>

                <select
                  onChange={() => {
                    toast.info("Status Changed");
                  }}
                  className="text-green-500 border border-green-300 bg-white p-2 m-3 rounded-lg text-center"
                >
                  <option value="Ordered">Ordered</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out For delivery">Out for Delivery</option>
                </select>
              </div>
            ))
          : "No Items"}
        {/* <div className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm text-center">
          <div className="flex flex-col items-start gap-1">
            <div>Apple x 2</div>
            <div>Pepsi x 3</div>
            <div className="font-bold">Monkey D Luffy</div>
            <div>Wind Mill Village, East Blue</div>
          </div>
          <div className="flex flex-col items-start">
            <div>Items : 5</div>
            <div>Method: COD</div>
            <div>Payment: Pending</div>
            <div>Date : 28/11/2024</div>
          </div>
          <p
            // type="button"
            className=" cursor-pointer text-right text-black px-2 py-1 rounded-lg md:text-center "
            //   onClick={() => handleRemoveUnit(item._id)}
          >
            ₹423.49
          </p>
          <select className="text-green-500 border border-green-300 bg-white p-2 m-3 rounded-lg text-center">
            <option value="Ordered">Ordered</option>
            <option value="Shipped">Shipped</option>
            <option value="Out For delivery">Out for Delivery</option>
          </select>
        </div> */}
      </div>
    </div>
  );
}

export default Orders;
