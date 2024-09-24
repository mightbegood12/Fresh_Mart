import React from "react";

const Items = ({ item }) => {
  return (
    <div className="itemWrapper flex flex-col gap-3 min-w-40 flex-shrink-0 rounded-lg p-4 border-2 m-2 items-center justify-center">
      <div className="img">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="info flex flex-col gap-1 items-start justify-start">
        <span className="font-bold">{item.name}</span>
        <div className="price-add-btn flex items-center gap-5">
          <span className="text-green-600">{`$${item.price.toFixed(2)}`}</span>
          <button className="h-auto px-2 py-1 bg-red-600 text-white rounded-lg text-center cursor-pointer">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;
