import SearchLogo from "/assets/search.svg";
import CartLogo from "/assets/cart.svg";
import MenuIcon from "/assets/menu.svg";
import BackIcon from "/assets/back.svg";
import Userlogo from "/assets/user-logo.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { currency, useCart } from "../context/CartContext"; // Use the custom hook
import { useState } from "react";
import { Flip, toast } from "react-toastify";

const Navbar = ({ token, setToken }) => {
  const { cartItems, logout } = useCart();
  const [visible, setVisible] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  //LOGOUT
  const handleLogout = () => {
    toast.info("User Logged out Successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
    });
    setToken("");
    navigate("/");
    logout();
  };

  return (
    <main className="border p-2">
      <nav className="flex flex-row items-center justify-between md:justify-around">
        <NavLink
          to="/"
          className=" text-2xl lg:text-3xl h-12 w-max m-0 p-2 text-center text-red-700"
        >
          Fresh <span className="text-orange-700">Mart</span>
        </NavLink>
        <div className="hidden md:block lg:hidden w-auto text-md ">
          Location
        </div>
        <div className="hidden lg:flex  flex-col w-60 p-2 overflow-hidden">
          <span className="font-bold text-[1rem] inline-block ">
            Delivery in 10 minutes
          </span>
          <div className="text-sm block truncate">
            145 West 45th Street, Apt 3B, New York, NY 10036
          </div>
        </div>
        <div className="hidden md:flex flex-col p-2">
          <input
            type="text"
            className="border h-10 w-80 lg:w-96 outline-none p-3 pl-10 rounded-lg placeholder-gray-500"
            placeholder="Search 'Milk'"
          />
          <img
            className="absolute p-2 w-10"
            src={SearchLogo}
            alt="search icon"
          />
        </div>

        {token ? (
          <div className="hidden group md:flex items-center relative gap-4">
            <NavLink to="/profile" className="flex items-center gap-2">
              <img
                src={Userlogo}
                alt="User Avatar"
                className="w-14 h-14 rounded-full object-cover"
              />
            </NavLink>
            <div className="bg-white rounded-sm h-max w-32 absolute top-12 -left-[40px] shadow-md hidden group-hover:flex flex-col">
              <NavLink
                className="px-4 py-2 text-sm text-center hover:bg-red-100"
                to="/profile"
              >
                Profile
              </NavLink>
              <NavLink
                className="px-4 py-2 text-sm text-center hover:bg-red-100"
                to="/my-orders"
              >
                My Orders
              </NavLink>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm hover:bg-red-100"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <NavLink
            to="/sign-in"
            className="hidden md:block text-lg h-12 m-0 p-2 text-center"
          >
            Sign In
          </NavLink>
        )}

        <div className="hidden md:flex flex-row flex-shrink-0 flex-grow-0 ">
          <NavLink
            to="/cart"
            className="h-10 p-2 bg-red-600 text-white rounded-lg cursor-pointer"
            // onClick={handleNavLinkClick}
          >
            <div className="relative hidden md:flex flex-row flex-grow-0 item-center">
              <img
                className="absolute w-6 hover:animate-wiggle"
                src={CartLogo}
                alt="cart icon"
              />
              <div className="pl-8 w-24 h-6 flex flex-col justify-center items-center">
                {cartItems.length === 0 ? (
                  <div>My Cart</div>
                ) : (
                  <div className="flex flex-col gap-0 text-sm items-center justify-around">
                    <div className="text-[14px]">
                      {cartItems.length + " "}items
                    </div>
                    <div className="text-[12px]">
                      {currency}
                      {cartItems
                        .reduce((total, item) => total + item.price, 0)
                        .toFixed(2)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </NavLink>
        </div>
        <img
          className="block w-10 p-2 md:hidden cursor-pointer opacity-80"
          onClick={() => setVisible(true)}
          src={MenuIcon}
          alt="Menu"
        />

        <div
          className={`absolute h-screen top-0 right-0 bottom-0 overflow-hidden bg-white z-50 transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col justify-center text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center p-3 cursor-pointer gap-2"
            >
              <img className="h-4" src={BackIcon} alt="Back" />
              <p>Back</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <NavLink to="/" className="flex flex-col p-2">
                <input
                  type="text"
                  className="border h-10 w-80 lg:w-96 outline-none p-3 pl-10 rounded-lg placeholder-gray-500"
                  placeholder="Search 'Milk'"
                />
                <img
                  className="absolute p-2 w-10"
                  src={SearchLogo}
                  alt="search icon"
                />
              </NavLink>
              <NavLink
                className={`${
                  location.pathname === "/" ? "here" : ""
                } border-b-[1px] w-full text-center py-2`}
                onClick={() => setVisible(false)}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={`${
                  location.pathname === "/location" ? "here" : ""
                } border-b-[1px] w-full text-center py-2`}
                onClick={() => setVisible(false)}
                to="/"
              >
                Location
              </NavLink>
              <NavLink
                className={`${
                  location.pathname === "/cart" ? "here" : ""
                } border-b-[1px] w-full text-center py-2`}
                onClick={() => setVisible(false)}
                to="/cart"
              >
                Cart
              </NavLink>
              <NavLink
                className={`${
                  location.pathname === "/sign-in" ? "here" : ""
                } border-b-[1px] w-full text-center py-2`}
                onClick={() => setVisible(false)}
                to="/sign-in"
              >
                Sign In
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
