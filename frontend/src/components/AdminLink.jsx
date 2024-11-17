import React from "react";
import { Link } from "react-router-dom";

export const AdminLink = () => {
  return (
    <div className="h-12 md:h-20 w-20 bg-gradient-to-r from-[rgb(246,102,42)] to-[#dc2626] rounded-full flex items-center justify-center sticky bottom-4 left-4 z-[99]">
      <Link
        className="text-white font-semibold"
        to="https://groceries-rho.vercel.app/"
      >
        Admin
      </Link>
    </div>
  );
};
