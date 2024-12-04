import React from "react";
import { scrollToTop } from "../Utils/ScrollToTop";

const ScrollTop = () => {
  return (
    <div
      onClick={scrollToTop}
      className="text-white font-semibold h-12 w-12 p-2 bg-gradient-to-r from-[rgb(244,240,238)] to-[#d2d2d2] rounded-full hidden md:flex items-center justify-center cursor-pointer sticky bottom-4 ml-[95%] z-[99]"
    >
      🔝
    </div>
  );
};

export default ScrollTop;
