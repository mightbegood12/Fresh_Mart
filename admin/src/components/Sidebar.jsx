import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="min-h-screen w-[20%] border-r-2">
      <div className="flex flex-col m-2 align-center justify-center">
        <NavLink
          to="/add"
          className="p-2 flex border-b-2 flex-row align-center justify-end"
        >
          <div>Add Item</div>
        </NavLink>
        <NavLink
          to="/list"
          className="p-2 flex border-b-2 flex-row align-center justify-end"
        >
          List Item
        </NavLink>
        <NavLink
          to="/orders"
          className="p-2 flex border-b-2 flex-row align-center justify-end"
        >
          Orders
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
