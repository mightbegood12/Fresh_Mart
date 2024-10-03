import React, { useState } from "react";
import Items from "./Items";

export default function Categories({ title, items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 9;

  const next = () => {
    if (currentIndex < items.length - itemsToShow) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="flex flex-col mx-40 gap-2 max-h-96">
      <div className="text-2xl font-bold">{title}</div>
      <div className="relative carousel-container py-4">
        <button
          onClick={prev}
          className={`absolute left-0 top-1/2 z-10 transform -translate-y-1/2 bg-black bg-opacity-20 rounded-lg hover:bg-opacity-30 text-white p-2 ${
            currentIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          &#10094;
        </button>
        <div
          className="carousel-items px-4"
          style={{
            display: "flex",
            transition: "transform 0.3s ease",
            transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
            width: `${(items.length * 100) / itemsToShow}%`,
          }}
        >
          {items.map((item) => (
            <Items key={item.id} item={item} />
          ))}
        </div>
        <button
          onClick={next}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-20 text-white p-2 rounded-lg z-20 hover:bg-opacity-30 ${
            currentIndex >= items.length - itemsToShow
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }`}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
