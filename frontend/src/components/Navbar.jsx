import SearchLogo from "/assets/search.svg";
import CartLogo from "/assets/cart.svg";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Use the custom hook
// import handleLinkClick from "../Utils/ScrollToTop";

const Navbar = () => {
  const { cartItems } = useCart(); // Access cart items

  return (
    <main className="border  p-2">
      <nav className="flex flex-row items-center justify-between md:justify-around px-4 ">
        <Link
          to="/"
          className="text-red-700 text-2xl h-12 w-max m-0 p-2 text-center"
        >
          Fresh <span className="text-orange-700">Mart</span>
        </Link>
        <div className="group">
          <div className="h-max p-0 m-0 flex flex-col gap-1 md:hidden">
            <div className="h-[1px] w-[12px] bg-black "></div>
            <div className="h-[1px] w-[12px] bg-black "></div>
            <div className="h-[1px] w-[12px] bg-black "></div>
          </div>
          <div className="hidden group">
            <div>SignIn/Up</div>
            <div>Location</div>
            <div>My Cart</div>
          </div>
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
            className="border h-10 min-w-80 w-96 outline-none p-3 pl-10 rounded-lg placeholder-gray-500"
            placeholder="Search 'Milk'"
          />
          <img
            className="absolute p-2 w-10"
            src={SearchLogo}
            alt="search icon"
          />
        </div>
        <Link
          to="/sign-in"
          // onClick={handleLinkClick}
          className="hidden md:block text-lg h-12 m-0 p-2 text-center"
        >
          Sign In
        </Link>
        <div className="hidden md:flex flex-row flex-shrink-0 flex-grow-0 ">
          <Link
            to="/cart"
            className="h-10 p-2 bg-red-600 text-white rounded-lg cursor-pointer"
            // onClick={handleLinkClick}
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
                      $
                      {cartItems
                        .reduce((total, item) => total + item.price, 0)
                        .toFixed(2)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
