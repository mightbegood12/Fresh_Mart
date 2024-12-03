import React from "react";
import { Link } from "react-router-dom";

export const AdminLink = () => {
  return (
    <Link
      className="hidden md:flex text-white font-semibold h-12 w-20 bg-gradient-to-r from-[rgb(246,102,42)] to-[#dc2626] rounded-full items-center justify-center sticky bottom-4 left-4 z-[99]"
      to="http://localhost:5000/"
    >
      Admin
    </Link>
  );
};
