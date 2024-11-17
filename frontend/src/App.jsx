import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import CartItems from "./components/CartItems";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import ItemView from "./pages/ItemView";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { AdminLink } from "./components/adminLink";
export const backendURL = import.meta.env.VITE_BACKEND_URL;

// Main content of the app with Navbar control
function AppContent() {
  const location = useLocation();
  const [list, setList] = useState([]);
  // Define the routes where you don't want to render the Navbar
  const hideRoutes = ["/sign-in", "/sign-up"];

  // Check if the current route matches any of the routes in hideNavbarRoutes
  const shouldHide = hideRoutes.includes(location.pathname);
  const shouldHideCart = location.pathname === "/cart";

  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const fetchData = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/api/product/list"
      );
      if (response.data.success) {
        setList(response.data.product);
        // console.log(list);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  let availableCategories = [];

  list.filter((product) =>
    availableCategories.includes(product.category)
      ? availableCategories
      : availableCategories.push(product.category)
  );

  useEffect(() => {
    localStorage.setItem("token", token);
    fetchData();
  }, [token]);

  return (
    <>
      <ToastContainer />
      {/* Conditionally render Navbar */}
      {!shouldHide && (
        <header className="sticky top-0 z-50 bg-white/95">
          <Navbar token={token} setToken={setToken} />
        </header>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              productData={list}
              availableCategories={availableCategories}
            />
          }
        />
        <Route path="/sign-in" element={<SignIn setToken={setToken} />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile setToken={setToken} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item-view/:id" element={<ItemView />} />
      </Routes>

      <footer>
        <Footer availableCategories={availableCategories} />
      </footer>
      {!shouldHide && !shouldHideCart && (
        <div className="sticky bottom-3 z-40">
          <CartItems />
        </div>
      )}
      <AdminLink />
    </>
  );
}

// App component with routing and CartContext provider
function App() {
  return <AppContent />;
}

export default App;
