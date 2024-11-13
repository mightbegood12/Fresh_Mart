import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import axios from "axios";
import { currency } from "../../constants.js";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.product);
        // console.log(list);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleRemoveUnit = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      console.log(response);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="flex flex-col w-[82%] gap-2 p-2">
      <p className="text-lg mt-1 font-semibold">All Products List</p>
      <div className="flex flex-col gap-2 m-4 ">
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border font-thin bg-gray-100 text-sm text-center">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list
          ? list.map((item, index) => (
              <div
                className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm text-center"
                key={index}
              >
                <img className="w-12" src={item.images[0]} alt={item.name} />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>
                  {currency}
                  {item.price}
                </p>
                <p
                  type="button"
                  className=" cursor-pointer text-right text-red-500 px-2 py-1 rounded-lg md:text-center "
                  onClick={() => handleRemoveUnit(item._id)}
                >
                  &#10006;
                </p>
              </div>
            ))
          : "No Items"}
      </div>
    </div>
  );
};

export default List;
