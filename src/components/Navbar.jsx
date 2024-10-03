import { useState, useEffect, useRef } from "react";
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
        <nav className="flex flex-row items-center justify-center gap-24">
          <Link
            to="/"
            className="text-red-700 text-2xl h-12 m-0 p-2 text-center"
          >
            LOGO
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
            <svg
              className="absolute p-2 w-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
                <svg
                  className="absolute w-6 hover:animate-wiggle"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2ZM18 13H7.78078L6.28078 7H20.1211C20.6742 7 21.0063 7.40675 20.9794 7.81078C20.9034 8.9522 20.6906 10.3318 20.1836 11.3949C19.6922 12.4251 19.0201 13 18 13ZM18 20.9938C17.4511 20.9938 17.0062 20.5489 17.0062 20C17.0062 19.4511 17.4511 19.0062 18 19.0062C18.5489 19.0062 18.9938 19.4511 18.9938 20C18.9938 20.5489 18.5489 20.9938 18 20.9938ZM7.00617 20C7.00617 20.5489 7.45112 20.9938 8 20.9938C8.54888 20.9938 8.99383 20.5489 8.99383 20C8.99383 19.4511 8.54888 19.0062 8 19.0062C7.45112 19.0062 7.00617 19.4511 7.00617 20Z"
                    fill="#ffffff"
                  />
                </svg>
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
