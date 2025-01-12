import React from "react";

const AdminHome = () => {
  return (
    <div className="flex flex-col h-[90vh] ml-[18%] w-[82%] items-center justify-center gap-4">
      <h1 className="text-6xl">Welcome to Admin Page</h1>
      <p className="flex flex-col gap-1 items-center justify-center text-lg">
        From the side bar, You can
        <span className="text-sm">
          Add items, List all the available items, and Manage the orders.
        </span>
      </p>
    </div>
  );
};

export default AdminHome;
