import { Link } from "react-router-dom";
import DynamicButton from "./DynamicButton";
import handleLinkClick from "../Utils/ScrollToTop";

const Items = ({ item, categoryTitle }) => {
  return (
    <>
      <Link
        to={`/item-view/${item.id}`}
        onClick={handleLinkClick}
        state={{ item, categoryTitle }}
      >
        <div className="itemWrapper px-4 flex flex-col drop-shadow-sm hover:scale-110 ease-in-out duration-300 gap-3 max-w-40 flex-shrink-0 rounded-lg p-4 border-[1px] border-opacity-30 border-gray-400 m-2 items-center justify-center">
          <div className="img object-cover">
            <img src={item.images[0]} alt={item.name} />
          </div>
          <div className="info flex flex-col gap-1 items-start justify-start ">
            <span className="font-semibold mt-1">{item.name}</span>
            <div className="price-add-btn max-w-[100%] flex flex-row items-center  gap-5">
              <span className="text-green-600">{`$${item.price.toFixed(
                2
              )}`}</span>
              <div className="dynamic-button">
                <DynamicButton item={item} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Items;
