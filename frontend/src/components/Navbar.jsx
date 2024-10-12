import { useState, useEffect, useRef } from "react";
import SearchLogo from "/assets/search.svg";
import CartLogo from "/assets/cart.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
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
    <>
      <main className="border p-2">
        <nav className="flex flex-row items-center justify-center gap-24 ">
          <Link
            to="/"
            className="text-red-700 text-2xl h-12 m-0 p-2 text-center"
          >
            Fresh <span className="text-orange-700">Mart</span>
          </Link>
          <div className="flex flex-col w-60 line-clamp-1 p-2 overflow-hidden">
            <span className="font-bold inline-block ">
              Delivery in 10 minutes
            </span>
            <div className="text-sm block truncate">
              145 West 45th Street, Apt 3B, New York, NY 10036
            </div>
          </div>
          <div className="flex flex-col p-2">
            <input
              type="text"
              className="border h-10 min-w-96 outline-none p-3 pl-10 rounded-lg placeholder-gray-500"
              placeholder="Search 'Milk'"
            />
            <img
              className="absolute p-2 w-10"
              src={SearchLogo}
              alt="search icon"
            />
          </div>
          <Link to="/sign-in" className="text-lg h-12 m-0 p-2 text-center">
            Sign In
          </Link>
          <div className="flex flex-row">
            <Link
              to="/cart"
              className="h-10 p-2  bg-red-600 text-white rounded-lg cursor-pointer"
            >
              <div className="relative flex flex-row">
                <img
                  className="absolute w-6 hover:animate-wiggle"
                  src={CartLogo}
                  alt="cart icon"
                />
                <div className="pl-8">My Cart</div>
              </div>
            </Link>
          </div>
        </nav>
      </main>
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
    </>
  );
};

export default Navbar;
