import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import ItemView from "./pages/ItemView";
import { categoriesData } from "./categoriesData";

// Main content of the app with Navbar control
function AppContent() {
  const location = useLocation();

  // Define the routes where you don't want to render the Navbar
  const hideNavbarRoutes = ["/sign-in", "/sign-up"];

  // Check if the current route matches any of the routes in hideNavbarRoutes
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {/* Conditionally render Navbar */}
      {!shouldHideNavbar && (
        <header className="sticky top-0 z-50 bg-white">
          <Navbar />
        </header>
      )}

      <Routes>
        <Route path="/" element={<Home categoriesData={categoriesData} />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item-view/:id" element={<ItemView />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

// App component with routing and CartContext provider
function App() {
  return <AppContent />;
}

export default App;
