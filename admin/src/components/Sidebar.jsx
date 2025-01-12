import React from "react";
import { NavLink } from "react-router-dom";
import add_icon from "/add_icon.png";
import orders_icon from "/orders.png";
import list_icon from "/list_icon.png";

const Sidebar = () => {
  return (
    <div className="min-h-full fixed bg-white w-[18%] border-r-2">
      <div className="flex flex-col m-2 align-center justify-center">
        <NavLink
          to="/add"
          className="p-2 flex border-b-2 flex-row justify-between"
        >
          <img className="h-6 opacity-80 m-1" src={add_icon} alt="" />
          <div className="hidden opacity-80 md:block m-1">Add Item</div>
        </NavLink>
        <NavLink
          to="/list"
          className="p-2 flex border-b-2 flex-row align-center justify-between"
        >
          <img className="h-6 opacity-80 m-1" src={list_icon} alt="" />
          <div className="hidden opacity-80 md:block m-1">List Item</div>
        </NavLink>
        <NavLink
          to="/orders"
          className="p-2 flex border-b-2 flex-row align-center justify-between"
        >
          <img className="h-6 opacity-80 m-1" src={orders_icon} alt="" />
          <div className="hidden opacity-80 md:block m-1">Orders</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
