import React from "react";

export const Title = ({ titleText }) => {
  return (
    <>
      <p className="uppercase text-xl md:text-2xl">{titleText}</p>
      <hr className="border-none h-[1.8px] w-7 bg-gray-600" />
    </>
  );
};
