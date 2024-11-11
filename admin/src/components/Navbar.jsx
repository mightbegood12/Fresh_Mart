import React from "react";

const Navbar = () => {
  return (
    <main className="border p-2">
      <nav className="flex flex-row items-center justify-between md:justify-between mx-2">
        <div className=" text-2xl lg:text-3xl h-12 w-max m-0 p-2 text-center text-red-700">
          Fresh <span className="text-orange-700">Mart</span> <span className="text-sm text-gray-400">Admin</span>
        </div>
        <button className="text-white bg-red-700 p-2 rounded-lg text-[15px]">Log out</button>
      </nav>
    </main>
  );
};

export default Navbar;
