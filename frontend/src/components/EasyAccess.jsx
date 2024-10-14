import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function EasyAccess() {
  const [dropdown, setDropDown] = useState(false);
  const dropdownRef = useRef(null);

  const groceries = [
    "Bread",
    "Eggs",
    "Milk",
    "Chicken breast",
    "Rice",
    "Apples",
    "Carrots",
    "Butter",
    "Pasta",
    "Olive oil",
  ];

  const handleDropDown = () => {
    setDropDown((prev) => !prev); // Toggle dropdown
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex gap-3 justify-center items-center text-sm text-gray-500 my-3">
      <Link to="/">Vegetable & Fruits</Link>
      <Link>Dairy & Breakfast</Link>
      <Link>Munchies</Link>
      <Link>Cold Drinks & Juices</Link>
      <Link>Instant & Frozen Food</Link>
      <Link>Tea, Coffee & Healthy Drinks</Link>
      <Link>Bakery & Biscuits</Link>
      <span className="relative inline-block" ref={dropdownRef}>
        <button
          onClick={handleDropDown}
          className=" text-gray-500 cursor-pointer text-sm"
        >
          {dropdown ? "Less" : "More"}
        </button>
        {dropdown && (
          <ul className="absolute z-30 bg-white shadow-md w-32 mt-2 mr-20 border rounded">
            {groceries.map((item) => (
              <li
                key={item}
                className="px-4 py-2 text-gray-600 cursor-pointer hover:bg-gray-100"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </span>
    </div>
  );
}
