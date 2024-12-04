import { Link } from "react-router-dom";
import DynamicButton from "./DynamicButton";
import { currency } from "../constants/constant.js";
import { useEffect, useState } from "react";
import cacheImages from "../Utils/cacheImages.jsx";

const Items = ({ item, categoryTitle }) => {
  const [isLoading, setIsLoading] = useState(false);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  // Handle clicks on the overall link, but check if it comes from the button
  const handleLinkClick = (e) => {
    // If the click is within the DynamicButton, prevent navigation
    if (e.target.closest(".dynamic-button")) {
      e.preventDefault();
    } else {
      scrollToTop(); // Only scroll to top if it's not a button click
    }
  };

  useEffect(() => {
    setIsLoading(true);
    cacheImages(item.images);
    setIsLoading(false);
  }, [item.images]);

  return (
    <>
      <Link
        to={`/item-view/${item._id}`}
        onClick={handleLinkClick}
        state={{ item, categoryTitle }}
        // target="_blank"
      >
        <div className="itemWrapper px-4 flex flex-col drop-shadow-sm md:hover:scale-110  ease-in-out duration-300 gap-3 max-w-40 flex-shrink-0 rounded-lg p-4 border-[1px] border-opacity-30 border-gray-400 m-2 items-center justify-center">
          <div className="img object-cover">
            {isLoading ? (
              <div className="bg-gray-100 h-[120px] w-[120px] animate-pulse"></div>
            ) : (
              // <div className="bg-gray-300 h-[120px] w-[120px] animate-pulse flex items-center justify-center">
              //   {item.name}
              // </div>
              <img
                className=" h-[120px] w-[120px] object-cover"
                src={item.images[0]}
                alt={item.name}
              />
            )}
          </div>
          <div className="info flex flex-col gap-1 items-start justify-start">
            <div className="font-semibold mt-1">{item.name}</div>
            <div className="price-add-btn w-[100%] flex flex-row items-center justify-between gap-3">
              <div className="text-green-600 text-sm md:text-md lg:text-lg">{`${currency}${item.price.toFixed(
                0
              )}`}</div>
              <div className="dynamic-button">
                <DynamicButton item={item} selectedUnit={item.unit[0]} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Items;
